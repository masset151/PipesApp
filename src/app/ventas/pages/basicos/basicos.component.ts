import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = "andres";
  nombreUpper: string = 'ANDRES';
  nombreCompleto: string = 'anDRes maSsEt'
  fecha: Date = new Date(); //Fecha Actual
  constructor() { }

  

}
