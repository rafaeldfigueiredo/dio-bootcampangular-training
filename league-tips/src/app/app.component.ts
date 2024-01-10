import { Component } from '@angular/core';
import tips from './data/tips.json';

console.log(tips);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})



export class AppComponent {
  list = Object.keys(tips);
  tips = Object.keys(tips.Toplaner.tips);
  tipsLane = Object.values(tips.Toplaner.tips);

  lanebuttonPressed: boolean = false;
  buttonPress() {
    this.lanebuttonPressed = !this.lanebuttonPressed;
  }
  tipsbuttonPressed: boolean = false;
  tipsbutton(){
    this.tipsbuttonPressed = !this.tipsbuttonPressed;
  }
}
