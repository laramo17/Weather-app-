import { Component } from '@angular/core';
import { WeatherComponent } from './weather/weather.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true, 
  imports: [WeatherComponent] 
})
export class AppComponent {
  title = 'weather-app'; 
}
