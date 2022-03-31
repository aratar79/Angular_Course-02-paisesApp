import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.scss']
})
export class PorPaisComponent implements OnInit {

  termino : string = '';
  hayError: boolean = false;
  paises  : Country[] = [];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino: string) {

    this.hayError = false;
    this.termino = termino;
    console.log(this.termino);

    // Deprecate mientras curso Marzo 2022
    // this.paisService.buscarPais(this.termino)
    //   .subscribe( (response) => {
    //     console.log(response);
    //   }, (err) => {
    //     console.log('Se ha producido un error');
    //     console.info(err);
    //   });

    // Recomended
    this.paisService.buscarPais(this.termino).subscribe({
      next: (response) => {

        console.log(response);
        this.paises = response;
      },
      error: (err) => {

        console.log('Se ha producido un error');
        console.info(err);
        this.hayError = true;
        this.paises = [];

      },
      complete: () => console.info('complete')
    });

  }

  sugerencias(termino: string) {
    this.hayError = false;
  }

}
