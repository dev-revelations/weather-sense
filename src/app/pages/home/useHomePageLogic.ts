import { useEffect, useState } from "react";
import IWeatherModel from "../../domain/IWeatherModel";
import useCurrentWeather from "../../hooks/useCurrentWeather";



const useHomePageLogic = (f7router: any) => {
    const [sheetOpen, setSheetOpen] = useState(false);
    const [selectedForecast, setSelectedForecast] = useState<IWeatherModel | undefined>(undefined);

    const weather = useCurrentWeather();

    const dailyList = weather ? weather?.getDailyForecastList() : [];


    useEffect(() => {
        if (!weather) {
            f7router.navigate('/search/');
        }
    }, []);

    const handleForecastClick = (idx: number) => {
        if (dailyList?.length > 0) {
            setSelectedForecast(dailyList[idx]);
            setSheetOpen(true);
        }
    };

    const handleSheetClosed = () => setSheetOpen(false);

    const handleSearchClick = () => f7router.navigate('/search/');

    return {
        sheetOpen,
        selectedForecast,
        weather,
        dailyList,
        handleSheetClosed,
        handleSearchClick,
        handleForecastClick
    };
};



export default useHomePageLogic;