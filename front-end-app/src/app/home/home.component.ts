import { Component, OnInit } from '@angular/core';
import {User, UsuarioService} from "../usuario/usuario.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {ServicioApp} from "../Servicios/servicio.app";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
mostrar=false;
usuario:User[];
variable;

  constructor(private http: HttpClient, private _router: Router, private _usuarioService:ServicioApp ) { }

  ngOnInit() {
    this.http.get<User[]>('http://localhost:3000/cincoUsuarios').subscribe((data: User[]) => {
      this.usuario = data;
    });
    this.escucharCambiosAuto();
  }

  escucharCambiosAuto() {
    this._usuarioService.emitircambioAuto.subscribe((autos) => {this.variable= autos;
    });

  }




}
