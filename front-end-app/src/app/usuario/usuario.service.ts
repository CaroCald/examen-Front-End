import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs/index";

@Injectable()
export class UsuarioService {

  constructor(private http: HttpClient, private _router: Router){

  }
  usuario:User[];
  cargarPrimerosUsuario(): Observable<User[]>{
     return this.http.get<User[]>('http://localhost:3000/cincoUsuarios');

  }
  getTodo(): Observable<User[]>{
    return this.http.get<User[]>('http://localhost:3000/cincoSiguientes');
  }


}
export interface User{
  id: number,
  nombreUsuario:string,
  urlUsuario:any,
  correo: any;
}
