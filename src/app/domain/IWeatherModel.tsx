import { TypeForecastTemperature, TypeForecastWeather, TypeTemperature } from "./types";



export default interface IWeatherModel {
    getRawData(): any;
    getTemperature(tempType?: TypeTemperature): number;
    getTemperatureWithSymbol(tempType?: TypeTemperature): string;
    getHumidity(): number;
    getDescription(): string;
    getWeather(): TypeForecastWeather;
    getWindSpeed(): number;
    getDayNumber(): number;
    getDayName(): string;
    getFormatedDay(): string;
    getIcon(): string;
}