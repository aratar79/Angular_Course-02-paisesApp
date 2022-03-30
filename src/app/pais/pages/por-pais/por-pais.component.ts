import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.scss']
})
export class PorPaisComponent implements OnInit {

  termino : string = 'Hello World!';
  hayError: boolean = false;

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar() {

    this.hayError = false;
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
      },
      error: (err) => {

        console.log('Se ha producido un error');
        console.info(err);
        this.hayError = true;
      },
      complete: () => console.info('complete')
    });

  }

}
