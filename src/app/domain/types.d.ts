

export type TypeForecastWeather = {
    id: number,
    main: string,
    description: string,
    icon: string;
};

export type TypeForecastTemperature = {
    day: number,
    min: number,
    max: number,
    night: number,
    eve: number,
    morn: number;
};