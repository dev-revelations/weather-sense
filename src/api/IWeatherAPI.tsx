

export default interface IWeatherApi {
    byLocationName(locationName: string): Promise<any>;
    byGeolocation(lat: number, lon: number): Promise<any>;
}