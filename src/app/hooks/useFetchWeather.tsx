import { TypeLocation } from "../types";
import { useAppDispatch, useAppSelector } from "./storeHooks";
import { fetchWeather } from "../features/weatherSlice";

const useFetchWeather = () => {
    const weathersState = useAppSelector(state => state.weathers);
    const dispatch = useAppDispatch();

    const fetchWeatherInfo = (location: TypeLocation) => dispatch(fetchWeather(location));

    return {
        ...weathersState,
        fetchWeather: fetchWeatherInfo
    };
};

export default useFetchWeather;