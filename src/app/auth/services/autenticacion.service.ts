import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Usuario } from '../../../app/models/usuario';
//import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionacionService {

  sesion: any ={
    activa:false,
    usuario: {}
  }

  //URL_API: string = 'https://6265dce1dbee37aff9a94c90.mockapi.io';
  URL_API: string = 'https://63d02517e52f587829acf525.mockapi.io';

  constructor(private http: HttpClient) { }

  login(correo: string, password: string): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.URL_API}/users`).pipe(
      map((usuarios: Usuario[]) => {
        return usuarios.filter(u => u.correo === correo && u.password === password)
      })
    )
  }

  establecerSesion(sesionActiva: boolean, usuario: Usuario){
    this.sesion = {
      activa: sesionActiva,
      usuario: usuario
    }

    localStorage.setItem("sesion", JSON.stringify(this.sesion));

  }

}