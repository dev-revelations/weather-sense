

export default interface IWeatherAPI {
    byLocationName(locationName: string): Promise<any>;
    byGeolocation(lat: number, lon: number): Promise<any>;
}