import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import {interval} from 'rxjs';


export interface Cliente {
  nombre:String,
  genero:String
}

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})



export class NoComunesComponent {
 
  //i18Select
  nombre: string = 'Andres';
  genero: string = 'masculino';
  check:boolean = false;
 
    
 

 

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

  cambiarCliente(){

    if(!this.check){
      this.nombre="Ana"
      this.genero = "femenino"

      this.check = true;
    }else{
      this.nombre="Andres"
      this.genero = "masculino"

      this.check = false;
    }
    

  }

  borrarCliente(){
    this.clientes.pop()
  }

 //keyValuePipe

 persona = {
   nombre:'Andres',
   edad:'22',
   direccion:'Sevilla, Andalucia'
 }

 //JsonPipe

 heroes = [
   {
     nombre:"SuperMan",
     vuelva:true
   },
   {
    nombre:"Robin",
    vuela:false
  },
  {
    nombre:"Aquaman",
    vuela:false
  },
  ]
//AsyncPipe

  miObservable = interval(1000);

  valorPromesa = new Promise((resolve,reject)=>{
    setTimeout(()=> {
      resolve('tenemos datos de promesa')
    },3500)
  });

}
