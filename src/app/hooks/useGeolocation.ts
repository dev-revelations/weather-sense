
import { useEffect, useState } from 'react';
import { TypeGeolocation } from '../types';
import AppGeolocation from '../device/geolocation/AppGeolocation';


const useGeolocation = () => {
    const [currentLocation, setCurrentLocation] = useState<TypeGeolocation | undefined>(undefined);

    useEffect(() => {
        (new AppGeolocation()).getCurrentLocationAsync()
            .then(location => {
                setCurrentLocation(location);
            });
    }, []);

    return {
        currentLocation
    };
};

export default useGeolocation;