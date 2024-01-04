import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})


export class ContentComponent {
  @Input()
  photoCover:string = "https://u-static.fotor.com/images/text-to-image/result/PRO-c2cced0ed2ff453b9b5a0e95e67b482f.jpg"
  @Input()
  contentTitle:string = "bruh"
  @Input()
  contentDescription:string = 'BROOOO'
}
