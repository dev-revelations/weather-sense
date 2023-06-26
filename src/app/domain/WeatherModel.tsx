import { toDayName, toDayNumber } from "../utils";
import ForecastModel from "./ForecastModel";
import IWeatherModel from "./IWeatherModel";
import { TypeForecastWeather } from "./types";


export default class WeatherModel implements IWeatherModel {

    private readonly data: any;
    private readonly dailyList: IWeatherModel[];

    constructor(weatherData: any) {
        this.data = weatherData;
        this.dailyList = weatherData.daily?.map((forecast: any) => new ForecastModel(forecast));
    }

    getId(): number {
        return this.data?.id;
    }

    getName(): string {
        return this.data?.name;
    }

    getDailyForecastList(): Array<IWeatherModel> {
        return this.dailyList;
    }


    /* 
        Interface Implementations
    */

    getDayNumber(): number {
        const dt = this.data?.current?.dt;
        return toDayNumber(dt);
    }

    getDayName(): string {
        const dt = this.data?.current?.dt;
        return toDayName(dt)?.substring(0, 3);
    }

    getRawData(): any {
        return this.data;
    }

    getFormatedDay(): string {
        throw new Error("Method not implemented.");
    }

    getTemperature(tempType: undefined | 'min' | 'max' = undefined): number {
        return Math.round(this.data?.current?.temp);
    }

    getTemperatureWithSymbol(): string {
        return `${this.getTemperature()}°C`;
    }

    getHumidity(): number {
        return this.data?.current?.humidity;
    }

    getDescription(): string {
        return this.data?.current?.weather[0]?.description;
    }

    getIcon(): string {
        const icon = this.data?.current?.weather[0]?.icon;
        const path = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        return path;
    }

    getWeather(): TypeForecastWeather {
        return this.data?.current?.weather;
    }

    getWindSpeed(): number {
        return this.data?.current?.wind_speed;
    }

}