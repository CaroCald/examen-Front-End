import {EventEmitter, Injectable} from "@angular/core";
import {Paciente} from "../paciente/paciente.service";
import {medicamentos} from "../medicamento/medicamento.servicio";

@Injectable()
export class ServicioApp {
  mostrar;
  mostrarPaciente:Paciente[];
  mostrarMedicamento;
  emitircambioAuto:EventEmitter<String>=new EventEmitter();
  emitirPaciente:EventEmitter<Paciente[]>=new EventEmitter();
  emitirMedicamento:EventEmitter<medicamentos[]>=new EventEmitter();


  emitirCambio(cambioAuto:String){
    this.mostrar=cambioAuto;
    this.emitircambioAuto.emit(cambioAuto);
  }
  cambiarBusqueda(busqueda:Paciente[]){
    this.mostrarPaciente=busqueda;
    this.emitirPaciente.emit(busqueda);
  }
  cambiarMedicamento(buscar: medicamentos[]){
    this.mostrarMedicamento=buscar;
    this.emitirMedicamento.emit(buscar);
  }
}
