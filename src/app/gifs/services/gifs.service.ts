import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  
  private _historial: string[] = [];


  //esta funcion retorna los datos que existen en el array
  get historial(){
    return [...this._historial];
  }


  //buscamos los gifs y los vamos agregando al array _historia
  buscarGifs(query: string){
    this._historial.unshift(query);

    console.log(this._historial)
  }

}
