import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ElectricCarsComponent } from './electric-cars/electric-cars.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ElectricCarsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ElectricCars';
}