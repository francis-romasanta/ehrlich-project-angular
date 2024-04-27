import { Component, OnInit } from '@angular/core';
import { AuthGuard, AuthService } from '@auth0/auth0-angular';
import { WeatherService } from '../services/weather.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [AuthGuard]
})
export class HomeComponent implements OnInit {
  user: any;

  weather: any;
  city: any;
  temperature: number = 0;
  feelsLikeTemp: number = 0;
  humidity: number = 0;
  pressure: number = 0;
  summary: string = '';
  iconURL: string = '';
  //city: string = 'Pateros';
  searchCity: string = '';
  lat: number = 0;
  lon: number = 0;
  
  constructor(private authService: AuthService, private weatherService: WeatherService, private formBuilder: FormBuilder) {
    this.user = {};
  }

  public ngOnInit(): void {
    this.authService.user$.subscribe((success: any) => {
      this.user = success;
    });
  }

  onSubmit() {;
    this.getCoordinates(this.searchCity);
    this.getWeather();
  }
  
  getCoordinates(city: string) {
    this.weatherService.getCoordinates(this.searchCity).subscribe({
        next: (res) => {
                this.city = res;;
                this.lat = this.city[0].lat;
                this.lon = this.city[0].lon;
                this.getWeather();
        },
        error: (error) => console.error('Error fetching coordinates:', error.message)
    });
}

  getWeather() {
    this.weatherService.getWeather(this.lat, this.lon).subscribe({
      next: (res) => {
        this.weather = res;
        this.temperature = this.weather.main.temp;
        this.feelsLikeTemp = this.weather.main.feels_like;
        this.humidity = this.weather.main.humidity;
        this.pressure = this.weather.main.pressure;
        this.summary = this.weather.weather[0].main;

        this.iconURL = 'https://openweathermap.org/img/wn/' + this.weather.weather[0].icon + '@2x.png';
      },

      error: (error) => console.log(error.message),
    })
  }
}
