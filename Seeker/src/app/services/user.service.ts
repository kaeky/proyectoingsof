import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url = "http://localhost:3000/api";

  constructor(private _http: HttpClient) { }


  guardar(usuario : Usuario) : Observable<any> {
    return this._http.post(`${this.url}/usuario`, usuario);
  }

  login(usuario) : Observable<any> {
    return this._http.post(`${this.url}/login`, usuario);
  }

}
