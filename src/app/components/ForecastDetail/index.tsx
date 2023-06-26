import { Block, List, ListItem } from "framework7-react";
import IWeatherModel from "../../domain/IWeatherModel";

import './style.scss';

type ForecastDetailProps = {
    forecast: IWeatherModel;
};

const ForecastDetail = ({ forecast }: ForecastDetailProps) => {

    return (
        <>
            <Block strong inset className="description">
                <img src={forecast?.getIcon()} />
                <span>{forecast?.getDescription()}</span>
            </Block>

            <Block>
                <List inset dividers>
                    <ListItem className='detail-item'><span>Condition</span><span>{forecast?.getWeather().main}</span></ListItem>
                    <ListItem className='detail-item'><span>High</span><span>{forecast?.getTemperatureWithSymbol('max')}</span></ListItem>
                    <ListItem className='detail-item'><span>Low</span><span>{forecast?.getTemperatureWithSymbol('min')}</span></ListItem>
                    <ListItem className='detail-item'><span>Humidity</span><span>{forecast?.getHumidity()}%</span></ListItem>
                    <ListItem className='detail-item'><span>Wind</span><span>{forecast?.getWindSpeed()}m/s</span></ListItem>
                </List>
            </Block>
        </>
    );
};

export default ForecastDetail;