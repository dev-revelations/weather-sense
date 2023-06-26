import { useAppSelector } from "../../hooks/storeHooks";
import useFetchWeather from "../../hooks/useFetchWeather";


const useSeachLogic = (f7router: any) => {

    const { weathers } = useAppSelector(state => state.weathers);

    const { loading, fetchWeather } = useFetchWeather();


    const handleSearch = (text: string) => {
        if (text?.length > 0) {
            fetchWeather(text);
            f7router.navigate('/weather/');
        }
    };


    return {
        weathers,
        handleSearch
    };

};

export default useSeachLogic;