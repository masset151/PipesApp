import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
  //i18Select
  nombre: string = 'Andres'
  genero: string = 'masculino'

  invitacionMap = {
    'masculino':'invitarlo',
    'femenino': 'invitarla'

  }

  //i18nPlural
  
  clientes: string[] = ['Andres','Maria','Arya','Pedro','Juan','Gabri']

  clientesMap = {
    '=0':'no tenemos ningun cliente esperando',
    '=1':'tenemos a un cliente esperando',
    '=2':'tenemos 2 clientes esperando',
    'other':'tenemos # clientes esperando'
    
  }

 

}
