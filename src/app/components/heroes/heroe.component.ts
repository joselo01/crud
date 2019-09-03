import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

    public heroe: Heroe = {
      nombre: '',
      bio: '',
      casa: 'Marvel'
    }

    // tslint:disable-next-line: no-inferrable-types
    nuevo: boolean = false;
    id: string;

  constructor( private heroeService: HeroesService, private router: Router, private activatedrouter: ActivatedRoute ) {

      this.activatedrouter.params
        .subscribe( parametros => {
          this.id = parametros.id;
          if ( this.id !== 'nuevo' ) {
              this.heroeService.getHeroe( this.id )
                .subscribe((heroe: any) => this.heroe = heroe);
          }
        });
   }

  ngOnInit() {
  }

  guardar() {
    console.log(this.heroe);

    if (this.id === 'nuevo') {
      this.heroeService.nuevoHeroe( this.heroe )
      .subscribe((data: any) => {
          this.router.navigate(['/heroe', data.name]);
      },
      error => console.error(error));

    } else {
      this.heroeService.actualizarHeroe( this.heroe, this.id )
      .subscribe((data: any) => {
          console.log(data);
      },
      error => console.error(error));
    }
  }


  agregarNuevo( forma: NgForm ) {
    this.router.navigate(['/heroe', 'nuevo']);

    forma.reset({
      casa: 'Marvel'
    });
  }



}
