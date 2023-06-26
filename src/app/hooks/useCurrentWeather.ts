import WeatherModel from "../domain/WeatherModel";
import { useAppSelector } from "./storeHooks";


const useCurrentWeather = () => {
    const { currentWeatherIdx, weathers } = useAppSelector(state => state.weathers);

    let weather: WeatherModel | undefined;

    if (weathers?.length > 0 && currentWeatherIdx > -1) {
        weather = weathers[currentWeatherIdx];
    }

    return weather;
};

export default useCurrentWeather;