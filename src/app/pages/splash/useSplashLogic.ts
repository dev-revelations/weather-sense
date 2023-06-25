import { useEffect } from "react";


const useSplashLogic = (f7route: any) => {

    useEffect(() => {
        setTimeout(() => {
            f7route.navigate('/weather/');
        }, 3000);
    }, []);
};

export default useSplashLogic;