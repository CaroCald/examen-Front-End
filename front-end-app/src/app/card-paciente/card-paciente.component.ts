import { Component, OnInit } from '@angular/core';
import { Paciente } from '../paciente/paciente.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card-paciente',
  templateUrl: './card-paciente.component.html',
  styleUrls: ['./card-paciente.component.css']
})
export class CardPacienteComponent implements OnInit {

  paciente:Paciente[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Paciente[]>('http://localhost:3000/Paciente').subscribe((data: Paciente[]) => {
      this.paciente = data;
    });
  }

  seleccionar(){

  }
}
