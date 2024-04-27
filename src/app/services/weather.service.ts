import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(lat: number, lon: number) {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=9ec1f99d65f9d21e6b7aaa3f8f3b43b4&units=metric');
  }

  getCoordinates(city: string) {
    return this.http.get('https://api.openweathermap.org/geo/1.0/direct?q=' + city + '&limit=5&appid=' + '9ec1f99d65f9d21e6b7aaa3f8f3b43b4');
  }

}
