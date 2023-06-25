import { toDayName, toDayNumber } from "../utils";
import ForecastModel from "./ForecastModel";
import IWeatherModel from "./IWeatherModel";
import { TypeForecastWeather } from "./types";


export default class WeatherModel implements IWeatherModel {

    private readonly data: any;

    constructor(weatherData: any) {
        this.data = weatherData;
    }

    getDayNumber(): number {
        const dt = this.data?.current?.dt;
        return toDayNumber(dt);
    }
    getDayName(): string {
        const dt = this.data?.current?.dt;
        return toDayName(dt);
    }

    getForecastData(): any {
        return this.data;
    }

    getTemperature(): number {
        return this.data?.current?.temp;
    }

    getHumidity(): number {
        return this.data?.current?.humidity;
    }

    getDescription(): string {
        return this.data?.current?.weather?.description;
    }

    getIcon(): string {
        return this.data?.current?.weather?.icon;
    }

    getWeather(): TypeForecastWeather {
        return this.data?.current?.weather;
    }

    getWindSpeed(): number {
        return this.data?.current?.wind_speed;
    }


    listDailyForecast(): Array<IWeatherModel> {
        return this.data?.daily?.map((forecast: any) => new ForecastModel(forecast));
    }

}