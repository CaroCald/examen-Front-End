import { Component, OnInit } from '@angular/core';
import {Paciente} from "./paciente.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {
  paciente: Paciente[];
  class = 'page-item';

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.cargar();
    this.class = this.class + ' ' + 'disable'

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

  seleccionar() {

  }
}
