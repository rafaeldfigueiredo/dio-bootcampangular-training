import { Component } from '@angular/core';
import tipsjson from './data/tips.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  tips = Object.entries(tipsjson)
}
