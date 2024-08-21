import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  saveUser(email:any, password:any){
    return this.http.post('http://127.0.0.1:8000/api/create',{
      email:email,
      password:password
    })
  }

  saveEmpleado(nombre:any, apellido:any, CI:any, nFoto:any, foto:any, puesto:any, latitud:any, longitud:any){
    let datos = new FormData();
    datos.append('nombre', nombre);
    datos.append('apellido', apellido);
    datos.append('CI', CI);
    datos.append('nFoto', nFoto);
    datos.append('foto', foto);
    datos.append('puesto', puesto);
    datos.append('latitud', latitud);
    datos.append('longitud', longitud);


    return this.http.post('http://127.0.0.1:8000/api/empleado', datos)
  }
}


