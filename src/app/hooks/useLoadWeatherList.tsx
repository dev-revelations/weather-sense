import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./storeHooks";
import { loadLocalWeathers } from "../features/weatherSlice";
import WeatherModel from "../domain/WeatherModel";


const useLoadWeatherList = (loadImmediately = true) => {

    const { currentWeatherIdx, weathers } = useAppSelector(state => state.weathers);

    const dispatch = useAppDispatch();

    const loadLocalList = () => dispatch(loadLocalWeathers());

    if (loadImmediately) {
        useEffect(() => {
            loadLocalList();
        }, []);
    }

    let weather: WeatherModel | undefined;

    if (weathers?.length > 0 && currentWeatherIdx > -1) {
        weather = weathers[currentWeatherIdx];
    }

    return {
        loadLocalWeatherList: loadLocalList
    };
};


export default useLoadWeatherList;