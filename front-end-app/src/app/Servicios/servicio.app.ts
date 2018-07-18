import {EventEmitter, Injectable} from "@angular/core";
import {Paciente} from "../paciente/paciente.service";
import {medicamentos} from "../medicamento/medicamento.servicio";
import {User} from "../usuario/usuario.service";

@Injectable()
export class ServicioApp {
  mostrar;
  idUsuario;
  usuario:User;
  idMedicamentos;
  mostrarPaciente:Paciente[];
  mostrarMedicamento;
  emitircambioAuto:EventEmitter<User>=new EventEmitter();
  emitirPaciente:EventEmitter<Paciente[]>=new EventEmitter();
  emitirMedicamento:EventEmitter<medicamentos[]>=new EventEmitter();

  setIdUsuario(id){
    this.idUsuario=id;
  }
  setUsuario(user:User){
    this.usuario=user;
  }
  setIdMedicamento(id){
    this.idMedicamentos=id;
  }

  emitirCambio(cambioAuto:User){
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
