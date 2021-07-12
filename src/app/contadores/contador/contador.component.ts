import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent  {
numero:number= 1;
title:string= 'contador';

acumular(valor:number){
this.numero += valor;
}


}
