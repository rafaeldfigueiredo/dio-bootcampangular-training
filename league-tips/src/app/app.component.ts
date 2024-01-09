import { Component } from '@angular/core';
import tips from './data/tips.json';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  tips = Object.keys(tips.Toplaner);
  buttonPressed: boolean = false;
  buttonPress() {
    this.buttonPressed = !this.buttonPressed;
  }
}
