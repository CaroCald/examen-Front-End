import {Component, Input, OnInit} from '@angular/core';import { HttpClient } from '@angular/common/http';
import {medicamentos} from "../medicamento/medicamento.servicio";
import {User, UsuarioService} from "../usuario/usuario.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-card-usuario',
  templateUrl: './card-usuario.component.html',
  styleUrls: ['./card-usuario.component.css']
})
export class CardUsuarioComponent implements OnInit {
@Input() urlImagen: string;
@Input() nombre: string;

  usuario:User[];
indice;

class='page-item';
  constructor(private http: HttpClient, private _router: Router, private usuarioService:UsuarioService) { }

  ngOnInit() {
  this.primero();
  this.class=this.class+' '+'disable'
  }
    primero(){
    this.usuarioService.cargarPrimerosUsuario().subscribe((data: User[]) => {
      this.usuario = data;
    });
  }



  mostrar(){
    this.usuarioService.getTodo().subscribe((data: User[]) => {
      this.usuario = data;
    });
    this.class=this.class+' '+'enable'
  }

}
