import { Component, OnInit } from '@angular/core';
import {medicamentos} from "./medicamento.servicio";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-medicamento',
  templateUrl: './medicamento.component.html',
  styleUrls: ['./medicamento.component.css']
})
export class MedicamentoComponent implements OnInit {
  medicamento: medicamentos[];

  class = 'page-item';

  constructor(private http: HttpClient, private router:Router) {
  }

  ngOnInit() {

    this.class = this.class + ' ' + 'disable';
    this.cargar()

  }

  cargar() {
    this.http.get<medicamentos[]>('http://localhost:3000/cincoMedicamentos').subscribe((data: medicamentos[]) => {
      this.medicamento = data;
    });
  }

  cargarMas() {
    this.http.get<medicamentos[]>('http://localhost:3000/siguieneMedicamentos').subscribe((data: medicamentos[]) => {
      this.medicamento = data;
    });
  }

  seleccionar() {

    let url=['/peticion'];
    this.router.navigate(url);
  }
}
