import { Component, OnInit } from '@angular/core';
import {User, UsuarioService} from "./usuario.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {


  constructor(private http: HttpClient, private _router: Router, private usuarioService:UsuarioService) { }
  usuario:User[];
  nombre;
  class='page-item';


  ngOnInit() {
    this.primero();

  }

  primero(){
    this.usuarioService.cargarPrimerosUsuario().subscribe((data: User[]) => {
      this.usuario = data;
    });
  }

  seleccionar(indice){

    let url=['/transferir'];
    this._router.navigate(url);
    console.log(indice);

  }

  mostrar(){
    this.usuarioService.getTodo().subscribe((data: User[]) => {
      this.usuario = data;
    });
    this.class=this.class+' '+'enable'
  }

}
