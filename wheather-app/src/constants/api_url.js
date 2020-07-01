const location = "Bogota,co";
const api_key = "e0cd1ca1b7c0d4e6ffa6755e2fefab91";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;