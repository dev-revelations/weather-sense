
export type AppConfig = {
    weatherApiKey: string;
};

export type TypeGeolocation = {
    lon: number;
    lat: number;
};

export type TypeLocation = string | TypeGeolocation;