import { TypeLocation } from "../types";
import { useAppDispatch, useAppSelector } from "./storeHooks";
import { fetchWeather } from "../features/weatherSlice";
import useLoadWeatherList from "./useLoadWeatherList";

const useFetchWeather = () => {

    const { loading, error } = useAppSelector(state => state.weathers);
    const dispatch = useAppDispatch();

    const fetchWeatherInfo = (location: TypeLocation) => dispatch(fetchWeather(location));

    return {
        loading,
        error,
        fetchWeather: fetchWeatherInfo
    };
};

export default useFetchWeather;