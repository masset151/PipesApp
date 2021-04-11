import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
//Modulo Creado

import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

// cambiar el locales de la App
import localeEs from '@angular/common/locales/es'
import {registerLocaleData} from '@angular/common'

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    VentasModule,
    
    
    
    
  ],
  providers: [{
    provide: LOCALE_ID,useValue:'es-VE'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
