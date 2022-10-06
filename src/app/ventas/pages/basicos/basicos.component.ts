import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent  {

  nombreLower: string = 'andrea';
  nombreUpper: string = 'ANDREA';
  nombreCompleto: string = 'aNdRea ACosTa';

  fechaDate: Date = new Date (); //el dia de hoy

}
