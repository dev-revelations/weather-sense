import { useEffect } from "react";

import useLoadWeatherList from '../../hooks/useLoadWeatherList';
import useFetchWeather from '../../hooks/useFetchWeather';
import useGeolocation from '../../hooks/useGeolocation';
import { TypeGeolocation } from "../../types";


const useSplashLogic = (f7router: any) => {

    const { currentWeather } = useLoadWeatherList();
    const { loading, error, fetchWeather } = useFetchWeather();
    const { currentLocation, geolocationReady } = useGeolocation();


    useEffect(() => {

        const navigateOptions = {
            reloadCurrent: true
        };

        if (!currentWeather && geolocationReady && (loading === 'idle' || loading === 'succeeded')) {
            if (currentLocation) {
                fetchWeather((location as unknown) as TypeGeolocation);
            } else {
                setTimeout(() => {
                    f7router.navigate('/search/', navigateOptions);
                }, 2000);
            }
        } else if (currentWeather && (loading === 'idle' || loading === 'succeeded')) {
            fetchWeather(currentWeather.getName());
        }

        if (loading === 'succeeded') {
            setTimeout(() => {
                f7router.navigate('/weather/', navigateOptions);
            }, 2000);
        } if (loading === 'failed') {
            setTimeout(() => {
                f7router.navigate('/search/', navigateOptions);
            }, 2000);
        }

    }, [currentWeather, loading, geolocationReady]);
};

export default useSplashLogic;