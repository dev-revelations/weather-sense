import axios from "axios";
import IWeatherApi from "./IWeatherApi";


export default class OpenWeatherApi implements IWeatherApi {

    private readonly API_KEY;
    private readonly BASE = `https://api.openweathermap.org`;
    private readonly CURRENT_WEATHER = `/data/2.5/weather`;
    private readonly ONE_CALL = `/data/3.0/onecall`;

    private readonly PARAM_APP_ID;
    private readonly PARAM_UNITS_METRIC = `units=METRIC`;
    private readonly PARAM_EXCLUDE = `exclude=minutely,hourly`;

    constructor(apiKey: string) {
        this.API_KEY = apiKey;
        this.PARAM_APP_ID = `appid=${apiKey}`;
    }

    async byLocationName(locationName: string): Promise<any> {

        // const currentWeatherUrl = `${this.BASE}${this.CURRENT_WEATHER}?${this.PARAM_UNITS_METRIC}&q=${locationName}&${this.PARAM_APP_ID}`;

        // const currentWeather = (await axios.get(currentWeatherUrl)).data;

        // const { lat, lon } = currentWeather.coord;

        // const dailyForecastUrl = `${this.BASE}${this.ONE_CALL}?${this.PARAM_UNITS_METRIC}&${this.PARAM_EXCLUDE}&lon=${lon}&lat=${lat}&${this.PARAM_APP_ID}`;

        // const dailyForecast = (await axios.get(dailyForecastUrl)).data;

        // console.log(dailyForecast.daily.map((item: any) => {

        //     const d = new Date(item.dt * 1000);

        //     // Sunday - Saturday : 0 - 6
        //     let day = d.getDay();
        //     // in JS Date Sun=0, in ISO 8601 Sun=7
        //     day = day === 0 ? 7 : day;

        //     return [item.dt, day];

        // }));

        // return {
        //     ...dailyForecast,
        //     ...currentWeather
        // };

        return mockData;
    }

    async byGeolocation(lat: number, lon: number): Promise<any> {

        // const currentWeatherUrl = `${this.BASE}${this.CURRENT_WEATHER}?${this.PARAM_UNITS_METRIC}&lon=${lon}&lat=${lat}&${this.PARAM_APP_ID}`;

        // const currentWeather = (await axios.get(currentWeatherUrl)).data;


        // const dailyForecastUrl = `${this.BASE}${this.ONE_CALL}?${this.PARAM_UNITS_METRIC}&${this.PARAM_EXCLUDE}&lon=${lon}&lat=${lat}&${this.PARAM_APP_ID}`;

        // const dailyForecast = (await axios.get(dailyForecastUrl)).data;

        // console.log(dailyForecast.daily.map((item: any) => {

        //     const d = new Date(item.dt * 1000);

        //     // Sunday - Saturday : 0 - 6
        //     let day = d.getDay();
        //     // in JS Date Sun=0, in ISO 8601 Sun=7
        //     day = day === 0 ? 7 : day;

        //     return [item.dt, day];

        // }));

        // return {
        //     ...dailyForecast,
        //     ...currentWeather
        // };

        return mockData;
    }

}


const mockData = {
    "lat": 51.5085,
    "lon": -0.1257,
    "timezone": 3600,
    "timezone_offset": 3600,
    "current": {
        "dt": 1687649785,
        "sunrise": 1687664647,
        "sunset": 1687724510,
        "temp": 19.52,
        "feels_like": 19.43,
        "pressure": 1018,
        "humidity": 73,
        "dew_point": 14.56,
        "uvi": 0,
        "clouds": 30,
        "visibility": 10000,
        "wind_speed": 2.06,
        "wind_deg": 80,
        "weather": [
            {
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03n"
            }
        ]
    },
    "daily": [
        {
            "dt": 1687694400,
            "sunrise": 1687664647,
            "sunset": 1687724510,
            "moonrise": 1687691100,
            "moonset": 1687650660,
            "moon_phase": 0.22,
            "summary": "Expect a day of partly cloudy with clear spells",
            "temp": {
                "day": 29.03,
                "min": 17.9,
                "max": 29.25,
                "night": 17.9,
                "eve": 24.87,
                "morn": 20.49
            },
            "feels_like": {
                "day": 28.55,
                "night": 17.47,
                "eve": 24.82,
                "morn": 20.06
            },
            "pressure": 1013,
            "humidity": 39,
            "dew_point": 13.66,
            "wind_speed": 6.72,
            "wind_deg": 214,
            "wind_gust": 10.03,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": 0,
            "pop": 0.02,
            "uvi": 8.01
        },
        {
            "dt": 1687780800,
            "sunrise": 1687751071,
            "sunset": 1687810910,
            "moonrise": 1687781760,
            "moonset": 1687737720,
            "moon_phase": 0.25,
            "summary": "There will be partly cloudy today",
            "temp": {
                "day": 23.09,
                "min": 13.8,
                "max": 23.09,
                "night": 17.54,
                "eve": 21.01,
                "morn": 15.11
            },
            "feels_like": {
                "day": 22.32,
                "night": 16.94,
                "eve": 20.26,
                "morn": 14.56
            },
            "pressure": 1020,
            "humidity": 33,
            "dew_point": 6.03,
            "wind_speed": 5.5,
            "wind_deg": 285,
            "wind_gust": 9.77,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": 72,
            "pop": 0,
            "uvi": 7.05
        },
        {
            "dt": 1687867200,
            "sunrise": 1687837498,
            "sunset": 1687897307,
            "moonrise": 1687872480,
            "moonset": 1687824720,
            "moon_phase": 0.29,
            "summary": "There will be partly cloudy today",
            "temp": {
                "day": 19.56,
                "min": 14.73,
                "max": 22.32,
                "night": 18.66,
                "eve": 21.56,
                "morn": 15.34
            },
            "feels_like": {
                "day": 18.96,
                "night": 18.41,
                "eve": 21.21,
                "morn": 14.84
            },
            "pressure": 1021,
            "humidity": 53,
            "dew_point": 9.69,
            "wind_speed": 5.26,
            "wind_deg": 248,
            "wind_gust": 7.42,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": 93,
            "pop": 0,
            "uvi": 3.58
        },
        {
            "dt": 1687953600,
            "sunrise": 1687923928,
            "sunset": 1687983700,
            "moonrise": 1687963500,
            "moonset": 1687911840,
            "moon_phase": 0.32,
            "summary": "There will be partly cloudy today",
            "temp": {
                "day": 22.85,
                "min": 15.88,
                "max": 24.58,
                "night": 20.95,
                "eve": 22.37,
                "morn": 17.41
            },
            "feels_like": {
                "day": 22.76,
                "night": 21.09,
                "eve": 22.46,
                "morn": 17.3
            },
            "pressure": 1017,
            "humidity": 60,
            "dew_point": 14.75,
            "wind_speed": 3.89,
            "wind_deg": 244,
            "wind_gust": 8.93,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": 75,
            "pop": 0.21,
            "uvi": 1.5
        },
        {
            "dt": 1688040000,
            "sunrise": 1688010361,
            "sunset": 1688070091,
            "moonrise": 1688054760,
            "moonset": 1687999080,
            "moon_phase": 0.35,
            "summary": "Expect a day of partly cloudy with rain",
            "temp": {
                "day": 18.12,
                "min": 16.4,
                "max": 19.53,
                "night": 16.4,
                "eve": 18.89,
                "morn": 17.71
            },
            "feels_like": {
                "day": 17.68,
                "night": 15.85,
                "eve": 18.35,
                "morn": 17.42
            },
            "pressure": 1015,
            "humidity": 65,
            "dew_point": 11.33,
            "wind_speed": 2.64,
            "wind_deg": 299,
            "wind_gust": 3.87,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": 100,
            "pop": 0.38,
            "rain": 0.57,
            "uvi": 6.15
        },
        {
            "dt": 1688126400,
            "sunrise": 1688096796,
            "sunset": 1688156478,
            "moonrise": 1688146260,
            "moonset": 1688086560,
            "moon_phase": 0.39,
            "summary": "Expect a day of partly cloudy with clear spells",
            "temp": {
                "day": 22.24,
                "min": 15.03,
                "max": 22.24,
                "night": 17.58,
                "eve": 21.14,
                "morn": 15.36
            },
            "feels_like": {
                "day": 21.49,
                "night": 17.22,
                "eve": 20.54,
                "morn": 14.6
            },
            "pressure": 1012,
            "humidity": 37,
            "dew_point": 6.98,
            "wind_speed": 5.59,
            "wind_deg": 253,
            "wind_gust": 7.51,
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": 25,
            "pop": 0.12,
            "uvi": 7
        },
        {
            "dt": 1688212800,
            "sunrise": 1688183234,
            "sunset": 1688242862,
            "moonrise": 1688237820,
            "moonset": 1688174460,
            "moon_phase": 0.42,
            "summary": "There will be partly cloudy until morning, then rain",
            "temp": {
                "day": 16.94,
                "min": 15.71,
                "max": 17.78,
                "night": 17.41,
                "eve": 17.78,
                "morn": 16.13
            },
            "feels_like": {
                "day": 17.2,
                "night": 17.61,
                "eve": 18.07,
                "morn": 16.12
            },
            "pressure": 1005,
            "humidity": 96,
            "dew_point": 16.13,
            "wind_speed": 5.57,
            "wind_deg": 204,
            "wind_gust": 12.43,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": 100,
            "pop": 1,
            "rain": 4.88,
            "uvi": 7
        },
        {
            "dt": 1688299200,
            "sunrise": 1688269674,
            "sunset": 1688329243,
            "moonrise": 1688328840,
            "moonset": 1688263140,
            "moon_phase": 0.46,
            "summary": "Expect a day of partly cloudy with rain",
            "temp": {
                "day": 21.88,
                "min": 14.61,
                "max": 21.88,
                "night": 14.61,
                "eve": 17.5,
                "morn": 15.16
            },
            "feels_like": {
                "day": 21.17,
                "night": 14.37,
                "eve": 17.42,
                "morn": 15.13
            },
            "pressure": 1005,
            "humidity": 40,
            "dew_point": 7.57,
            "wind_speed": 5.94,
            "wind_deg": 235,
            "wind_gust": 9.66,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": 100,
            "pop": 0.73,
            "rain": 3.5,
            "uvi": 7
        }
    ],
    "coord": {
        "lon": -0.1257,
        "lat": 51.5085
    },
    "weather": [
        {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 19.62,
        "feels_like": 19.54,
        "temp_min": 16.87,
        "temp_max": 21.01,
        "pressure": 1020,
        "humidity": 73
    },
    "visibility": 10000,
    "wind": {
        "speed": 1.54,
        "deg": 110
    },
    "clouds": {
        "all": 24
    },
    "dt": 1687649403,
    "sys": {
        "type": 2,
        "id": 2019646,
        "country": "GB",
        "sunrise": 1687664647,
        "sunset": 1687724510
    },
    "id": 2643743,
    "name": "London",
    "cod": 200
};