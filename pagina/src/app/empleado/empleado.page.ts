import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Servicios/api.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.page.html',
  styleUrls: ['./empleado.page.scss'],
})
export class EmpleadoPage implements OnInit {
  foto:any

  constructor(private apis:ApiService) { }

  ngOnInit() {
  }

  createEmpleado(nombre:any, apellido:any, CI:any, puesto:any, latitud:any, longitud:any){
    this.apis.saveEmpleado(nombre.value, apellido.value, CI.value, 'perfil', this.foto, puesto.value, latitud.value, longitud.value).subscribe();
  }

  obtenerImg(dato:any){
    this.foto = dato.target.files[0];
 }

}
