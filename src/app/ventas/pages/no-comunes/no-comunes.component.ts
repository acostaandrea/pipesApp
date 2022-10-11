import { Component } from '@angular/core';
import { interval } from 'rxjs';

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

  //keyValue pipe

  persona={
    nombre:'Fernando',
    edad: 35,
    direccion: 'Ottawa, Canada'
  }

  //json pipe

  heroes= [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }


  ]

  //Async pipe

  miObservable = interval(5000) //es un observable que emite valores numericos 0,1,2,3...

  valorPromesa = new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve('Tenemos data de promesa')
    }, 3500);
  }); //resolve si todo se hace bien, o reject por si no
}
