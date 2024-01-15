import { Component } from '@angular/core';
import tipsJSON from './data/tips.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  tipsTitle:any[] = []
  tipsDesc:any[] = []

  constructor() {
    for (const lane of tipsJSON.lanes) {
      const title = lane.tips.map(tip => tip.title);
      this.tipsTitle.push(title);
    }
    for (const lane of tipsJSON.lanes) {
      const descriptions = lane.tips.map(tip => tip.description);
      this.tipsDesc.push(descriptions);
    }
  }
}
