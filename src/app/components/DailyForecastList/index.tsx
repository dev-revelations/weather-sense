import { Button, List, ListItem } from "framework7-react";
import IWeatherModel from "../../domain/IWeatherModel";

import './style.scss';

type DailyForecastListProps = {
    forecastList: IWeatherModel[];
    onItemClick: (idx: number) => void;
};

const DailyForecastList = ({ forecastList, onItemClick }: DailyForecastListProps) => {

    const formatMinMaxTemp = (forecast: IWeatherModel) => {
        return `${forecast.getTemperature('max')} / ${forecast.getTemperature('min')}`;
    };

    return (
        <List dividers inset className="forecast-list">
            {
                forecastList.map((forecast, index) => {
                    return (
                        <ListItem key={`${forecast.getDayNumber()}_${index}`}>
                            <Button className="forecast-item-wrapper" onClick={() => onItemClick(index)}>
                                <span>{forecast.getFormatedDay()}</span>
                                <div className="forecast-item-temp-wrapper">
                                    <span>{formatMinMaxTemp(forecast)} °C</span>
                                    <img className="forecast-temp-icon" src={forecast.getIcon()} />
                                </div>
                            </Button>
                        </ListItem>
                    );
                })
            }
        </List>
    );
};

export default DailyForecastList;