import { Component} from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent  {
nombre:string= 'arturo';
edad:number= 28;
title:string= 'heroe';

unidos(){
  return `${this.nombre} ${this.edad} años`
}

get nombreCapitalizado(){
  return this.nombre.toUpperCase()
}
cambiarNombre(){
  return this.nombre= 'spiderman';
}
cambiarEdad(){
  return this.edad = 45;
}

}
