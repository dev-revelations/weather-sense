import { toDayName, toDayNumber } from "../utils";
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
        return toDayName(dt);
    }

    getForecastData(): any {
        return this.data;
    }

    getTemperature(): TypeForecastTemperature {
        return this.data?.temp;
    }

    getHumidity(): number {
        return this.data?.humidity;
    }

    getDescription(): string {
        return this.data?.weather?.description;
    }

    getIcon(): string {
        return this.data?.weather?.icon;
    }

    getWeather(): TypeForecastWeather {
        return this.data?.weather;
    }

    getWindSpeed(): number {
        return this.data?.wind_speed;
    }


}