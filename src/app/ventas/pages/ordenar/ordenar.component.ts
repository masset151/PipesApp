import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';


@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent{

  enMayusculas:boolean = true;

  ordenarPor:string = 'nombre';

  heroes:Heroe[] = [
    {
      nombre:'Superman',
      vuela:true,
      color:Color.azul
    },

    {
      nombre:'Batman',
      vuela:false,
      color:Color.verde
    },
    {
      nombre:'Robin',
      vuela:false,
      color:Color.verde
    },

    {
      nombre:'Daredevil',
      vuela:false,
      color: Color.rojo
    },
    {
      nombre:'Linterna Verde',
      vuela:true,
      color:Color.verde
    }
  ]

  TodoMayusculas(){
    if(!this.enMayusculas){
      this.enMayusculas = true;
    }else{
      this.enMayusculas = false;
    }
  }

  cambiarOrden(valor:string){
    this.ordenarPor = valor;
    console.log(valor)
  }

}
