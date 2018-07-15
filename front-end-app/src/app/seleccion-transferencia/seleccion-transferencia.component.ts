import { Component, OnInit } from '@angular/core';
import {medicamentos} from "../medicamento/medicamento.servicio";
import {User} from "../usuario/usuario.service";
import {Paciente} from "../paciente/paciente.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-seleccion-transferencia',
  templateUrl: './seleccion-transferencia.component.html',
  styleUrls: ['./seleccion-transferencia.component.css']
})
export class SeleccionTransferenciaComponent implements OnInit {
  usuario:User[];
  medicamento:medicamentos[];
  paciente: Paciente[];

  constructor(private http: HttpClient, private _router: Router) { }

  ngOnInit() {
    this.cargarDatos()
  }

  cargarDatos(){
    this.http.get<User[]>('http://localhost:3000/cincoUsuarios').subscribe((data: User[]) => {
      this.usuario = data;
    });
    this.http.get<Paciente[]>('http://localhost:3000/siguientePaciente').subscribe((data: Paciente[]) => {
      this.paciente = data;
    });
    this.http.get<medicamentos[]>('http://localhost:3000/cincoMedicamentos').subscribe((data: medicamentos[]) => {
      this.medicamento = data;
    });
  }
  seleccionar(){

    let url=['/peticion'];
    this._router.navigate(url);
  }

}
