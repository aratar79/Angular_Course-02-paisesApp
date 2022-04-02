import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { Country } from '../../interfaces/country.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-verpais',
  templateUrl: './por-verpais.component.html',
  styleUrls: ['./por-verpais.component.scss']
})
export class PorVerpaisComponent implements OnInit {

  pais!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) { }


  // Method for get url param defined in app-routing  
  // Method withou switchMap rxjs operator
  // ngOnInit(): void {
  //   this.activatedRoute.params
  //   .subscribe( ({ id }) => { // desetructure: equals params => { console.log(params.id)}
  //     console.log(id);
  //     this.paisService.getPaisByAlpha(id)
  //       .subscribe( pais => {
  //         console.log(pais)
  //         this.pais = pais[0]
  //       })
  //   });
  // }

  //Method with rxjs operator
  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({ id }) => this.paisService.getPaisByAlpha(id)),
      tap(console.log) // Abbreviation of: tap(resp => console.log(resp))
    )
    .subscribe(pais => this.pais = pais[0]);
  }

  pinta(){
    console.log(this.pais.name.common);
  }


}
