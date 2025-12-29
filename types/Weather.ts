export interface GeoLocation{
    name : string,
    latitude : number,
    longitude : number,
    country : string
}
export interface WeatherResponse {
  current: {
    temperature_2m: number;
    weather_code: number;
    wind_speed_10m: number;
    relative_humidity_2m: number;
    precipitation: number;
  };

  hourly: {
    time: string[];
    temperature_2m: number[];
    weather_code: number[];
    precipitation_probability: number[];
    uv_index: number[];
  };

  daily: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    weather_code: number[];
    precipitation_probability_max: number[];
    uv_index_max: number[];
    wind_speed_10m_max: number[];
  };
}
