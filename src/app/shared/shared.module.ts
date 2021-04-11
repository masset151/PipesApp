import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import {CardModule} from 'primeng/card';
import { BrowserModule } from '@angular/platform-browser';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';




@NgModule({
  declarations: [MenuComponent],
  exports:[
    MenuComponent
  ],
  
  imports: [
    CommonModule,
    BrowserModule,
    PrimeNgModule,
    
  ]

})
export class SharedModule { }
