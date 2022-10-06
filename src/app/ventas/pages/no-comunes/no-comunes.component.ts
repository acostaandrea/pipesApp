import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent  {

  //i18nSelct
  nombre: string = 'Gustavo';
  genero: string ='masculino';

  invitacionMap = {
    'masculino':'invitarlo',
    'femenino' : 'invitarla'
  }

  //i18nPlural

  clientes: string[] = ['Maria', 'Pedro','Juan', 'Roberto', 'Sofia'];

  clientesMap = {
    '=0' : 'no tenemos ningun cliente esperando',
    '=1' : 'tenemos cliente 1 esperando',
    'other': 'tenemos # clientes esperando'

  }

  cambiarCliente(){
    this.nombre = 'Melisa'
    this.genero = 'femenino'
  }

  borrarCliente(){
    this.clientes.shift()
  }


}
