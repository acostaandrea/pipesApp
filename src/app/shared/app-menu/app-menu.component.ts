import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.css']
})
export class AppMenuComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(){

    this.items = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [{
           label: 'Textos y Fechas',
           icon: 'pi pi-align-left',
           routerLink: '/'
        },
        {
          label: 'Numeros',
          icon: 'pi pi-dollar',
          routerLink: 'numeros'  //mismo path que en router link
       },
       {
        label: 'No comunes',
        icon: 'pi pi-globe',
        routerLink: 'no-comunes'  //mismo path que en router link
     }
         
        ]


      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog',
        routerLink: 'ordenar'
      }
  ];

  }

}
