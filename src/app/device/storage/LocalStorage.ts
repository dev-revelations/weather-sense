import { Preferences } from "@capacitor/preferences";

import IWeatherModel from "../../domain/IWeatherModel";
import IStorage from "./IStorage";
import WeatherModel from "../../domain/WeatherModel";


export default class LocalStorage implements IStorage {

    private readonly KEY_WEATHERS = 'KEY_WEATHERS';
    private readonly KEY_CURRENT_IDX = `KEY_CURRENT_IDX`;

    constructor() { }

    async saveCurrentIndexAsync(index: string): Promise<void> {
        await Preferences.set({
            key: this.KEY_CURRENT_IDX,
            value: String(index)
        });
    }
    async loadCurrentIndexAsync(): Promise<string> {
        const { value } = await Preferences.get({ key: this.KEY_CURRENT_IDX });

        return value === null ? '-1' : value;
    }

    async saveWeathersAsync(list: IWeatherModel[]): Promise<void> {
        const weathersRaw = list.map(item => item.getRawData());
        const weathersStringified = JSON.stringify(weathersRaw);
        await Preferences.set({
            key: this.KEY_WEATHERS,
            value: weathersStringified
        });
    }

    async loadWeathersAsync(): Promise<IWeatherModel[]> {
        let result: IWeatherModel[] = [];
        const { value } = await Preferences.get({ key: this.KEY_WEATHERS });
        const weathersRaw: [] = value !== null && value?.length > 0 ? JSON.parse(value as string) : [];
        result = weathersRaw.map(weather => new WeatherModel(weather));

        return result;
    }

}