import {EventEmitter, Injectable} from "@angular/core";

@Injectable()
export class ServicioApp {
  mostrar;
  emitircambioAuto:EventEmitter<String>=new EventEmitter();
  emitirCambio(cambioAuto:String){
    this.mostrar=cambioAuto;
    this.emitircambioAuto.emit(cambioAuto);
  }
}
