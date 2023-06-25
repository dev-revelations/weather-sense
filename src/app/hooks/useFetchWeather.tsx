import { TypeLocation } from "../types";
import { useAppDispatch, useAppSelector } from "./storeHooks";
import { fetchWeather } from "../features/weatherSlice";
import WeatherModel from "../domain/WeatherModel";

const useFetchWeather = () => {
    const { weathers, currentWeatherIdx, loading } = useAppSelector(state => state.weathers);
    const dispatch = useAppDispatch();

    const fetchWeatherInfo = (location: TypeLocation) => dispatch(fetchWeather(location));

    let weather: WeatherModel | undefined;

    if (loading === 'succeeded' && weathers?.length > 0 && currentWeatherIdx > -1) {
        weather = weathers[currentWeatherIdx];
    }


    return {
        weather,
        loading,
        fetchWeather: fetchWeatherInfo
    };
};

export default useFetchWeather;