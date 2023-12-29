import { Component } from '@angular/core';
import { MenuBarComponent } from "./menu-bar/menu-bar.component";
import { MenuTitleComponent } from "./menu-title/menu-title.component";
import { BigCardComponent } from "./big-card/big-card.component";
import { SmallCardComponent } from "./small-card/small-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MenuBarComponent,MenuTitleComponent,BigCardComponent,SmallCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
