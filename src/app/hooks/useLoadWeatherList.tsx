import { useEffect } from "react";
import { useAppDispatch } from "./storeHooks";
import { loadLocalWeathers } from "../features/weatherSlice";



const useLoadWeatherList = () => {

    const dispatch = useAppDispatch();

    const loadLocalList = () => dispatch(loadLocalWeathers());

    useEffect(() => {
        loadLocalList();
    }, []);

    return {
        loadLocalWeatherList: loadLocalList
    };
};


export default useLoadWeatherList;