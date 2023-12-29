import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-menu-title',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './menu-title.component.html',
    styleUrl: './menu-title.component.css',
})
export class MenuTitleComponent { }
