import { useEffect } from "react";

import useLoadWeatherList from '../../hooks/useLoadWeatherList';
import useFetchWeather from '../../hooks/useFetchWeather';
import useGeolocation from '../../hooks/useGeolocation';
import { TypeGeolocation } from "../../types";


const useSplashLogic = (f7router: any) => {

    const { currentWeather } = useLoadWeatherList();
    const { loading, error, fetchWeather } = useFetchWeather();
    const { currentLocation } = useGeolocation();


    useEffect(() => {

        const navigateOptions = {
            reloadCurrent: true
        };

        if (!currentWeather) {
            if (currentLocation) {
                fetchWeather((location as unknown) as TypeGeolocation);
            } else {
                setTimeout(() => {
                    f7router.navigate('/search/', navigateOptions);
                }, 2000);
            }
        } else {
            fetchWeather(currentWeather.getName());
        }

        if (loading === 'succeeded') {
            setTimeout(() => {
                f7router.navigate('/weather/', navigateOptions);
            }, 2000);
        }

    }, []);
};

export default useSplashLogic;