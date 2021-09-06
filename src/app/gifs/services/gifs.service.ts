import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = "RGICrswqbDNNxdb8SfUmHB4iSxJSLnIS";
  private serviceUrl: string = "https://api.giphy.com/v1/gifs"
  private _historial: string[] = [];

  // TODO: cambiar any por tipo correspondiente
  public resultados: Gif[] = [];

  //esta funcion retorna los datos que existen en el array
  get historial(){
    
    return [...this._historial];
  }

  constructor(private http: HttpClient){
    this._historial = JSON.parse(localStorage.getItem('Historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultado')!) || [];
    
    //if(localStorage.getItem('Historial')){
    //  this._historial = JSON.parse(localStorage.getItem('Historial')!)
    //}
  }

  //buscamos los gifs y los vamos agregando al array _historia
  buscarGifs(query: string){
    // esta funcion nos permite que el dato ingresado sea en minuscula
    query = query.trim().toLocaleLowerCase()
    
    //si el dato ingresado no se encuentra en el array entonces agreguelo al array 
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);

      localStorage.setItem('Historial', JSON.stringify(this._historial))

    }

    const params = new HttpParams()
        .set('api_key', this.apiKey)
        .set('limit', '10')
        .set('q',query);

  this.http.get<SearchGifsResponse>(`${this.serviceUrl}/search`, {params})    
    .subscribe((resp) => {
      this.resultados = resp.data;
      localStorage.setItem('resultado', JSON.stringify(this.resultados))
    })
  }

}
