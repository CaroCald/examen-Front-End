import { Component, OnInit } from '@angular/core';
import {User} from "../usuario/usuario.service";
import {HttpClient} from "@angular/common/http";
import {medicamentos} from "../medicamento/medicamento.servicio";
import {Paciente} from "../paciente/paciente.service";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario:User[];
  medicamento:medicamentos[];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<User[]>('http://localhost:3000/cincoUsuarios').subscribe((data: User[]) => {
      this.usuario = data;
    });
    this.http.get<medicamentos[]>('http://localhost:3000/cincoMedicamentos').subscribe((data: medicamentos[]) => {
      this.medicamento = data;
    });
  }

}
