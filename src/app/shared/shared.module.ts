import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { AppMenuComponent } from './app-menu/app-menu.component';




@NgModule({
  declarations: [
    AppMenuComponent
  ],
  exports: [
    AppMenuComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class SharedModule { }
