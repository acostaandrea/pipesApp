import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; //cuando usamos un componente con animacion


import { AppComponent } from './app.component';

//Modulo personalizado

import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//Cambiar el locale de la app

import  localeEs  from "@angular/common/locales/es-AR";
import  localeFr  from "@angular/common/locales/fr";
import { registerLocaleData } from "@angular/common";
registerLocaleData( localeEs);
registerLocaleData( localeFr);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRouterModule,
    VentasModule,
    BrowserAnimationsModule
  
  ],
  providers: [{
    provide: LOCALE_ID, useValue: 'es-AR'  
  }],  //registro de manera global el idioma
  bootstrap: [AppComponent]
})
export class AppModule { }
