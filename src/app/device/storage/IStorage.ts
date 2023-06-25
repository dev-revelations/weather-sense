import IWeatherModel from "../../domain/IWeatherModel";


export default interface IStorage {

    saveWeathersAsync(list: IWeatherModel[]): Promise<void>;

    loadWeathersAsync(): Promise<IWeatherModel[]>;

    saveCurrentIndexAsync(index: string): Promise<void>;

    loadCurrentIndexAsync(): Promise<string>;
}