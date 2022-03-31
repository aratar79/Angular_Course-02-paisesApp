import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-verpais',
  templateUrl: './por-verpais.component.html',
  styleUrls: ['./por-verpais.component.scss']
})
export class PorVerpaisComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .subscribe( ({ id }) => { // desetructure: equals params => { console.log(params.id)}
      console.log(id);
      this.paisService.getPaisByAlpha(id)
        .subscribe( pais => {
          console.log(pais)
        })
    });
  }

}
