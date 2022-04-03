import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.scss']
})
export class PorRegionComponent {

  regiones    : string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises      : Country[] = [];
  hayError    : boolean = false;

  constructor(private paisService: PaisService) { }

  getClassCss(region: string) {
    return (region === this.regionActiva) ? 'btn btn-secondary' : 'btn btn-outline-secondary';
  }
  
  activarRegion(region: string) {
    
    if(region === this.regionActiva) return;

    this.regionActiva = region;
    this.paisService.buscarPaisByregion(region)
      .subscribe({
        next: (response) => {
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
