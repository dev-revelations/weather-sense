import { TypeLocation } from "../types";
import { useAppDispatch, useAppSelector } from "./storeHooks";
import { fetchWeather } from "../features/weatherSlice";
import WeatherModel from "../domain/WeatherModel";
import useLoadWeatherList from "./useLoadWeatherList";

const useFetchWeather = () => {

    const { loadLocalWeatherList } = useLoadWeatherList();

    const { weathers, currentWeatherIdx, loading, error } = useAppSelector(state => state.weathers);
    const dispatch = useAppDispatch();

    const fetchWeatherInfo = (location: TypeLocation) => dispatch(fetchWeather(location));

    let weather: WeatherModel | undefined;

    if (weathers?.length > 0 && currentWeatherIdx > -1) {
        weather = weathers[currentWeatherIdx];
    }

    return {
        weather,
        loading,
        error,
        fetchWeather: fetchWeatherInfo,
        loadLocalWeatherList
    };
};

export default useFetchWeather;