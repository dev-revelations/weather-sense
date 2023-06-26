import { toDate, toDayName, toDayNumber, toMonthName } from "../utils";
import IWeatherModel from "./IWeatherModel";
import { TypeForecastTemperature, TypeForecastWeather } from "./types";


export default class ForecastModel implements IWeatherModel {

    private readonly data: any;

    constructor(forecastData: any) {
        this.data = forecastData;
    }


    getDayNumber(): number {
        const dt = this.data?.dt;
        return toDayNumber(dt);
    }

    getDayName(): string {
        const dt = this.data?.dt;
        return toDayName(dt)?.substring(0, 3);
    }

    getFormatedDay(): string {
        const dt = this.data?.dt;
        const date = toDate(dt);
        const dayName = this.getDayName();
        const monthName = toMonthName(dt).substring(0, 3);
        const monthDay = date.getDate();

        return `${dayName} ${monthName} ${monthDay}`;
    }

    getRawData(): any {
        return this.data;
    }

    getTemperature(tempType: undefined | 'min' | 'max' = undefined): number {
        const temp: TypeForecastTemperature = this.data?.temp;
        if (tempType === 'max') {
            return Math.round(temp.max);
        } else if (tempType === 'min') {
            return Math.round(temp.min);
        }

        return Math.round(temp.day);
    }

    getTemperatureWithSymbol(tempType: undefined | 'min' | 'max' = undefined): string {
        return `${this.getTemperature(tempType)}°C`;
    }

    getHumidity(): number {
        return this.data?.humidity;
    }

    getDescription(): string {
        return this.data?.weather[0]?.description;
    }

    getIcon(): string {
        const icon = this.data?.weather[0]?.icon;
        const path = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        return path;
    }

    getWeather(): TypeForecastWeather {
        return this.data?.weather;
    }

    getWindSpeed(): number {
        return this.data?.wind_speed;
    }


}