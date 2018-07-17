import { Component, OnInit } from '@angular/core';
import {Paciente, PacienteServiceApp} from "./paciente.service";
import {HttpClient} from "@angular/common/http";
import {User} from "../usuario/usuario.service";
import {ServicioApp} from "../Servicios/servicio.app";

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {
  paciente: Paciente[];
  class = 'page-item';

  constructor(private http: HttpClient, private pacienteService:PacienteServiceApp,
              private service:ServicioApp) {
  }

  ngOnInit() {
    this.cargar();
    this.class = this.class + ' ' + 'disable';
    this.escucharCambiosBusqueda();
  }
  escucharCambiosBusqueda(){
    this.service.emitirPaciente.subscribe((autos) => {this.paciente= autos;
    });
  }
  cargar() {
    this.http.get<Paciente[]>('http://localhost:3000/siguientePaciente').subscribe((data: Paciente[]) => {
      this.paciente = data;
    });
  }

  cargarMas() {
    this.http.get<Paciente[]>('http://localhost:3000/dosaciente').subscribe((data: Paciente[]) => {
      this.paciente = data;
    });
  }
  retomarBusqueda(parametro){
    this.pacienteService.buscar(parametro).subscribe((data:Paciente[])=>{
      this.paciente=data;
    })
  }

  seleccionar() {

  }
}
