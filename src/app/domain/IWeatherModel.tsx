import { TypeForecastTemperature, TypeForecastWeather } from "./types";


export default interface IWeatherModel {
    getWeatherData(): any;
    getTemperature(): number | TypeForecastTemperature;
    getHumidity(): number;
    getDescription(): string;
    getWeather(): TypeForecastWeather;
    getWindSpeed(): number;
    getDayNumber(): number;
    getDayName(): string;
    getIcon(): string;
}