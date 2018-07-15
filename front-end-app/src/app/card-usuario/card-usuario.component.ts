import { Component, OnInit } from '@angular/core';import { HttpClient } from '@angular/common/http';
import {medicamentos} from "../medicamento/medicamento.servicio";
import {User} from "../usuario/usuario.service";

@Component({
  selector: 'app-card-usuario',
  templateUrl: './card-usuario.component.html',
  styleUrls: ['./card-usuario.component.css']
})
export class CardUsuarioComponent implements OnInit {


  usuario:User[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<User[]>('http://localhost:3000/cincoUsuarios').subscribe((data: User[]) => {
      this.usuario = data;
    });
    }


  seleccionar(){

  }

}
