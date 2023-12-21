import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Hero } from "../hero";
import { HeroDetailComponent } from "../hero-detail/hero-detail.component";
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, FormsModule, HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})

export class HeroesComponent {

  heroes:Hero[] = []

  selectedHero?:Hero;

  constructor(private heroService: HeroService) {}

  onSelect(hero:Hero):void{this.selectedHero = hero;}
  
  //Populates the heroes list which is rendered when fired below
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
  //When started, this component fires the following:
  ngOnInit(): void {
    this.getHeroes();
  }
}