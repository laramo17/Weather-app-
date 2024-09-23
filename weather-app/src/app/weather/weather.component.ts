import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from '../weather.service';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule], // Add CommonModule and FormsModule here
  providers: [WeatherService]
})
export class WeatherComponent {
  city: string = '';
  weatherData: any;

  constructor(private weatherService: WeatherService) {}

  getWeather() {
    this.weatherService.getWeather(this.city).subscribe(
      data => {
        this.weatherData = data;
      },
      error => {
        console.error('Error fetching weather data', error);
      }
    );
  }
}
