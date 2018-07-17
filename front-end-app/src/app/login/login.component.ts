import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../usuario/usuario.service";
import {HttpClient} from "@angular/common/http";
import {ServicioApp} from "../Servicios/servicio.app";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
usuario:User[];
correo;
nombre;
verificar;
  constructor(private _router:Router, private http: HttpClient, private service:ServicioApp) { }


  ngOnInit() {

  }
  ingresar(parametro){

    console.log('http://localhost:3000/usuario/'+parametro);
    this.http.get<User[]>('http://localhost:3000/usuario/'+parametro).subscribe((data: User[]) => {
      this.usuario = data;
      console.log(data.map(datos=>datos.nombreUsuario));
      this.verificar=data.map(datos=>datos.nombreUsuario);
    });
    console.log(this.verificar);
    if(this.usuario[0].correo===this.correo){
      let url= ['/principal'];
      this._router.navigate(url);
      this.service.emitirCambio(this.verificar);
    }
    else{

    }

  }

}
