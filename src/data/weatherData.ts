export interface CurrentWeather {
  city: string;
  region: string;
  country: string;
  temperature: number;
  feelsLike: number;
  condition: string;
  conditionIcon: string;
  high: number;
  low: number;
  humidity: number;
  windSpeed: number;
  windDirection: string;
  uvIndex: number;
  visibility: number;
  pressure: number;
  dewPoint: number;
  sunrise: string;
  sunset: string;
  lastUpdated: string;
}

export interface ForecastDay {
  day: string;
  date: string;
  high: number;
  low: number;
  condition: string;
  conditionIcon: string;
  precipitation: number;
  humidity: number;
  wind: number;
}

export interface HourlyForecast {
  time: string;
  temp: number;
  condition: string;
  conditionIcon: string;
  precipitation: number;
}

export const currentWeather: CurrentWeather = {
  city: "San Francisco",
  region: "California",
  country: "United States",
  temperature: 64,
  feelsLike: 61,
  condition: "Partly Cloudy",
  conditionIcon: "partly-cloudy",
  high: 68,
  low: 54,
  humidity: 72,
  windSpeed: 14,
  windDirection: "WNW",
  uvIndex: 5,
  visibility: 10,
  pressure: 30.12,
  dewPoint: 52,
  sunrise: "6:42 AM",
  sunset: "7:58 PM",
  lastUpdated: "Today, 2:30 PM",
};

export const forecast: ForecastDay[] = [
  { day: "Today", date: "Apr 13", high: 68, low: 54, condition: "Partly Cloudy", conditionIcon: "partly-cloudy", precipitation: 10, humidity: 72, wind: 14 },
  { day: "Mon", date: "Apr 14", high: 65, low: 52, condition: "Cloudy", conditionIcon: "cloudy", precipitation: 30, humidity: 78, wind: 12 },
  { day: "Tue", date: "Apr 15", high: 62, low: 50, condition: "Light Rain", conditionIcon: "rainy", precipitation: 65, humidity: 85, wind: 18 },
  { day: "Wed", date: "Apr 16", high: 66, low: 53, condition: "Sunny", conditionIcon: "sunny", precipitation: 5, humidity: 60, wind: 10 },
  { day: "Thu", date: "Apr 17", high: 70, low: 56, condition: "Sunny", conditionIcon: "sunny", precipitation: 0, humidity: 55, wind: 8 },
];

export const hourlyForecast: HourlyForecast[] = [
  { time: "Now", temp: 64, condition: "Partly Cloudy", conditionIcon: "partly-cloudy", precipitation: 10 },
  { time: "3 PM", temp: 66, condition: "Partly Cloudy", conditionIcon: "partly-cloudy", precipitation: 10 },
  { time: "4 PM", temp: 67, condition: "Partly Cloudy", conditionIcon: "partly-cloudy", precipitation: 5 },
  { time: "5 PM", temp: 68, condition: "Partly Cloudy", conditionIcon: "partly-cloudy", precipitation: 5 },
  { time: "6 PM", temp: 65, condition: "Cloudy", conditionIcon: "cloudy", precipitation: 15 },
  { time: "7 PM", temp: 62, condition: "Cloudy", conditionIcon: "cloudy", precipitation: 20 },
  { time: "8 PM", temp: 59, condition: "Cloudy", conditionIcon: "cloudy", precipitation: 20 },
  { time: "9 PM", temp: 57, condition: "Partly Cloudy", conditionIcon: "partly-cloudy", precipitation: 15 },
  { time: "10 PM", temp: 56, condition: "Clear", conditionIcon: "clear-night", precipitation: 5 },
  { time: "11 PM", temp: 55, condition: "Clear", conditionIcon: "clear-night", precipitation: 5 },
];
