import { Component, OnInit } from '@angular/core';
import {medicamentos} from "../medicamento/medicamento.servicio";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-card-medicamento',
  templateUrl: './card-medicamento.component.html',
  styleUrls: ['./card-medicamento.component.css']
})
export class CardMedicamentoComponent implements OnInit {

  medicamento:medicamentos[];
  contador=0;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<medicamentos[]>('http://localhost:3000/Medicamento').subscribe((data: medicamentos[]) => {
        this.medicamento = data;
    });
  }


  seleccionar(){

  }
}
