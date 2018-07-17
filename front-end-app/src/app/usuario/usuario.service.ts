import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs/index";
import {Paciente} from "../paciente/paciente.service";
import {medicamentos} from "../medicamento/medicamento.servicio";

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
  buscar(parametro, salto, tomar):Observable<User[]>{
    return this.http.get<User[]>('http://localhost:3000/buscarskip/'+parametro+'/'+salto+'/'+tomar);
  }
  buscarPaciente(parametro, salto, tomar):Observable<Paciente[]>{
    return this.http.get<Paciente[]>('http://localhost:3000/buscar/'+parametro+'/'+salto+'/'+tomar);
  }
  buscarMedicamento(parametro, salto, tomar):Observable<medicamentos[]>{
    return this.http.get<medicamentos[]>('http://localhost:3000/buscarMed/'+parametro+'/'+salto+'/'+tomar);
  }

}
export interface User{
  id: number,
  nombreUsuario:string,
  urlUsuario:any,
  correo: any;
}
