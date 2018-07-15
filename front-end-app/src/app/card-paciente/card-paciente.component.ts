import {Component, Input, OnInit} from '@angular/core';
import { Paciente } from '../paciente/paciente.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card-paciente',
  templateUrl: './card-paciente.component.html',
  styleUrls: ['./card-paciente.component.css']
})
export class CardPacienteComponent implements OnInit {

  paciente:Paciente[];
  class='page-item';

  constructor(private http: HttpClient) { }
  @Input() urlImagen: string;
  @Input() nombre: string;
  @Input() apellido: string;
  @Input() edad: number;
  ngOnInit() {
    this.class=this.class+' '+'disable'

  }

  seleccionar(){

  }
}
