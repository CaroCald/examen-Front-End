import { Component, OnInit } from '@angular/core';
import {User, UsuarioService} from "./usuario.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Paciente, PacienteServiceApp} from "../paciente/paciente.service";
import {ServicioApp} from "../Servicios/servicio.app";
import {medicamentos} from "../medicamento/medicamento.servicio";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {


  constructor(private http: HttpClient, private _router: Router, private usuarioService:UsuarioService, private pacienteService:PacienteServiceApp, private service:ServicioApp) { }
  usuario:User[];
  paciente: Paciente[];
  nombre;
  class='page-item';
param;
  ngOnInit() {
    this.primero();
  }


  primero(){
    this.usuarioService.cargarPrimerosUsuario().subscribe((data: User[]) => {
      this.usuario = data;
      console.log(data);
    });
  }

  retomarBusqueda(parametro){
    this.usuarioService.buscar(parametro).subscribe((data:User[])=>{
      this.usuario=data;
    });
    this.usuarioService.buscarPaciente(parametro).subscribe((data:Paciente[])=>{
      this.service.cambiarBusqueda(data);
    });
    this.usuarioService.buscarMedicamento(parametro).subscribe((data:medicamentos[])=>{
      this.service.cambiarMedicamento(data);
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
