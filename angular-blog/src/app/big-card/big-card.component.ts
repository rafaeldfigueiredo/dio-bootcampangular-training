import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-big-card',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './big-card.component.html',
    styleUrl: './big-card.component.css',
})
export class BigCardComponent { }