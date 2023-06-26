import { TypeForecastTemperature, TypeForecastWeather } from "./types";


export default interface IWeatherModel {
    getRawData(): any;
    getTemperature(): number | TypeForecastTemperature;
    getTemperatureWithSymbol(): string;
    getHumidity(): number;
    getDescription(): string;
    getWeather(): TypeForecastWeather;
    getWindSpeed(): number;
    getDayNumber(): number;
    getDayName(): string;
    getIcon(): string;
}