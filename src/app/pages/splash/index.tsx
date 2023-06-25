import { Page } from 'framework7-react';
import useLoadWeatherList from '../../hooks/useLoadWeatherList';

import './style.scss';
import useSplashLogic from './useSplashLogic';

type SplashProps = {
    f7route: any;
    f7router: any;
};

const SplashScreen = (props: SplashProps) => {
    const { f7route, f7router } = props;

    useLoadWeatherList();

    useSplashLogic(f7router);

    return (
        <Page name="splash" className="safe-areas">
            <div className='splash-container'>
                <img src='../../../assets/logo.svg' />
                <h1>WeatherSense</h1>
            </div>
        </Page>
    );
};

export default SplashScreen;