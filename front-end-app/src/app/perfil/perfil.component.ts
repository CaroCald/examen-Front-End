import { Component, OnInit } from '@angular/core';
import {User} from "../usuario/usuario.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario:User[];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<User[]>('http://localhost:3000/cincoUsuarios').subscribe((data: User[]) => {
      this.usuario = data;
    });
  }

}
