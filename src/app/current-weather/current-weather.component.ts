import { Component, OnInit } from '@angular/core';

import { ICurrentWeather } from '../shared/model/interfaces';
import { WeatherService } from '../shared/services/weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService
      .getCurrentWeather('Montevago', 'IT')
      .subscribe((data) => (this.current = data));
  }
}
