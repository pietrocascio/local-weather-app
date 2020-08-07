import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICurrentWeather } from '../model/interfaces';

interface ICurrentWeatherData {
  weather: [
    {
      description: string;
      icon: string;
    }
  ];
  main: {
    temp: number;
  };
  sys: {
    country: string;
  };
  dt: number;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private readonly WEATHER_SERVICE_ENDPOINT = 'api.openweathermap.org/data/2.5/weather';

  constructor(private httpClient: HttpClient) {}

  getCurrentWeather(city: string, country: string): Observable<ICurrentWeather> {
    const uriParams = new HttpParams()
      .set('q', `${city},${country}`)
      .set('appid', environment.weatherAppId)
      .set('units', 'metric');

    return this.httpClient
      .get<ICurrentWeatherData>(
        `${environment.baseUrl}${this.WEATHER_SERVICE_ENDPOINT}`,
        { params: uriParams }
      )
      .pipe(map((data) => this.transformToICurrentWeather(data)));
  }
  transformToICurrentWeather(data: ICurrentWeatherData): ICurrentWeather {
    return {
      city: data.name,
      country: data.sys.country,
      date: data.dt * 1000,
      image: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
      temperature: data.main.temp,
      description: data.weather[0].description,
    } as ICurrentWeather;
  }
}
