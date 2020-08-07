import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';

const components = [AppComponent, CurrentWeatherComponent];
const modules = [BrowserModule, HttpClientModule];
@NgModule({
  declarations: [...components],
  imports: [...modules],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
