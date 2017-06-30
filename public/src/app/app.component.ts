import { Component,OnInit } from '@angular/core';
// import { Hero } from './hero';
// import { HeroService} from "./hero.service";

// <hero-detail [hero]="selectedHero"></hero-detail>

@Component({
  selector: 'my-app',
  template: ` 
  <top-nav></top-nav>
  <order></order>
  `,
  
// providers:[HeroService]
})
export class AppComponent {
  // title = 'Tour of Heroes';
  // selectedHero: Hero;
  // heroes :Hero[];

  // constructor(private heroService: HeroService) { }

  // ngOnInit():void{
  //   this.getHoroes()
  // }
  // getHoroes(){
  //   this.heroService.getHeros().then(heroes => this.heroes=heroes);
  // }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }
}
