import { Button } from "framework7-react";
import WeatherModel from "../../domain/WeatherModel";
import './style.scss';

type WeatherListProps = {
    weatherList?: WeatherModel[];
    onClick: (location: string) => void;
};

const WeatherList = (props: WeatherListProps) => {

    const { weatherList, onClick } = props;

    return (
        <div>
            {weatherList && weatherList.map((weather, index) => (
                <Button className="location-weather-button" onClick={() => onClick(weather.getName())} key={weather.getName()}>
                    <div className="location-weather-item">
                        <span>{weather.getName()}</span><span>{weather.getTemperature()} C</span> <img src={weather.getIcon()} />
                    </div>
                </Button>
            ))}
        </div>
    );
};

export default WeatherList;