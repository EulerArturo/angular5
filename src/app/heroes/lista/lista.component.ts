import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent  {
  title:string= 'listado de heroes'
  heroes:string[]=['arturo','euler','juan','carlos'];
  heroeBorrado:string= '';

  borrar(){
    this.heroeBorrado = this.heroes.shift() || '';
  }

}
