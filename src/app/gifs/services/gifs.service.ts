import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = "RGICrswqbDNNxdb8SfUmHB4iSxJSLnIS"
  private _historial: string[] = [];

  //esta funcion retorna los datos que existen en el array
  get historial(){
    
    return [...this._historial];
  }

  constructor(private http: HttpClient){

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

  this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=RGICrswqbDNNxdb8SfUmHB4iSxJSLnIS&q=dbz&limit=10`)    
    .subscribe((resp : any) => {
      console.log(resp.data)
    })
  }

}
