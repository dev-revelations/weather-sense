import { TypeForecastTemperature, TypeForecastWeather } from "./types";


export default interface IWeatherModel {
    getRawData(): any;
    getTemperature(tempType?: undefined | 'min' | 'max'): number;
    getTemperatureWithSymbol(): string;
    getHumidity(): number;
    getDescription(): string;
    getWeather(): TypeForecastWeather;
    getWindSpeed(): number;
    getDayNumber(): number;
    getDayName(): string;
    getFormatedDay(): string;
    getIcon(): string;
}