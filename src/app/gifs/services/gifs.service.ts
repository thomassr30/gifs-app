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
    // esta funcion nos permite que el dato ingresado sea en minuscula
    query = query.trim().toLocaleLowerCase()
    
    //si el dato ingresado no se encuentra en el array entonces agreguelo al array 
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);
    }

    

    console.log(this._historial)
  }

}
