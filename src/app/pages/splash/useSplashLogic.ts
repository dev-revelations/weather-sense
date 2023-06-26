import { useEffect } from "react";

import useLoadWeatherList from '../../hooks/useLoadWeatherList';
import useFetchWeather from '../../hooks/useFetchWeather';
import useGeolocation from '../../hooks/useGeolocation';
import { TypeGeolocation } from "../../types";
import useCurrentWeather from "../../hooks/useCurrentWeather";


const useSplashLogic = (f7router: any) => {

    useLoadWeatherList();
    const currentWeather = useCurrentWeather();
    const { loading, error, fetchWeather } = useFetchWeather();
    const { currentLocation, geolocationReady } = useGeolocation();


    useEffect(() => {

        const searchScreen = '/search/';
        const weatherScreen = '/weather/';

        const navigateOptions = {
            reloadCurrent: true
        };

        if (!currentWeather && geolocationReady && loading === 'idle') {
            if (currentLocation) {
                fetchWeather((location as unknown) as TypeGeolocation);
            } else {
                setTimeout(() => {
                    f7router.navigate(searchScreen, navigateOptions);
                }, 2000);
            }
        } else if (currentWeather && loading === 'idle') {
            fetchWeather(currentWeather.getName());
        }

        if (loading === 'succeeded') {
            setTimeout(() => {
                f7router.navigate(weatherScreen, navigateOptions);
            }, 2000);
        } if (loading === 'failed') {
            setTimeout(() => {
                f7router.navigate(searchScreen, navigateOptions);
            }, 2000);
        }

    }, [currentWeather, loading, geolocationReady]);
};

export default useSplashLogic;