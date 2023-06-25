
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import WeatherModel from '../domain/WeatherModel';
import IWeatherApi from '../api/IWeatherApi';
import OpenWeatherApi from '../api';
import config from '../config';
import { TypeLocation } from '../types';

const sliceName = 'weathers';

// The API needs to be injected by a dependency injection mechanism
const weatherApi: IWeatherApi = new OpenWeatherApi(config.weatherApiKey);

type WeatherSliceState = {
    lodaing: 'idle' | 'pending' | 'succeeded' | 'failed';
    error: string;
    weathers: WeatherModel[];
    currentWeatherIdx: number;
};


const initialState: WeatherSliceState = {
    lodaing: 'idle',
    error: '',
    weathers: [],
    currentWeatherIdx: -1
};


export const fetchWeather = createAsyncThunk(
    `${sliceName}/fetchByLocationName`,
    async (location: TypeLocation, thunkAPI) => {
        if (typeof location === 'string') {
            return await weatherApi.byLocationName(location);
        } else {
            const { lon, lat } = location;
            return await weatherApi.byGeolocation(lat, lon);
        }
    }
);

const weatherSlice = createSlice({
    name: sliceName,
    initialState,
    reducers: {},
    extraReducers: builder => {

        const pendingReducer = (state) => {
            state.lodaing = 'pending';
        };

        const fulfilledReducer = (state, action: PayloadAction<any>) => {
            state.lodaing = 'succeeded',
                state.error = '';
            const weather = new WeatherModel(action.payload);
            const index = state.weathers.findIndex((item: WeatherModel) => item.getName() === weather.getName());
            if (index === -1) {
                state.weathers.push(weather);
                state.currentWeatherIdx = state.weathers.length - 1;
            } else if (index > -1) {
                state.currentWeatherIdx = index;
                state.weathers[index] = weather;
            }
        };

        const failedReducer = (state, action) => {
            state.lodaing = 'failed';
            state.error = action.error.message || 'Something went wrong';
        };

        builder.addCase(fetchWeather.pending, pendingReducer);
        builder.addCase(fetchWeather.fulfilled, fulfilledReducer);
        builder.addCase(fetchWeather.rejected, failedReducer);
    }
});


export default weatherSlice.reducer;