import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {FieldsetModule} from 'primeng/fieldset';


@NgModule({
  declarations: [],
  exports:[
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
  ],
})
export class PrimeNgModule { }
