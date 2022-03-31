import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.scss']
})
export class PorCapitalComponent implements OnInit {

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

    // Recomended
    this.paisService.buscarCapital(this.termino).subscribe({
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
}
