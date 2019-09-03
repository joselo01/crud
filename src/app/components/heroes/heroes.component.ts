import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: any[] = [];
  // tslint:disable-next-line: no-inferrable-types
  loading: boolean = true;

  constructor( private heroeService: HeroesService) {

    this.heroeService.getHeroes()
      .subscribe( (data: any) => {
          // console.log(data);
          this.heroes = data;
          this.loading = false;
      });
  }

  ngOnInit() {
  }

  borraHeroe(key$: string) {
    this.heroeService.borrarHeroe(key$)
      .subscribe ((respuesta: any) => {
          if ( respuesta ) {
            console.log(respuesta);
          } else {
            // todo bien
            delete this.heroes[key$];
          }
      });
  }

}
