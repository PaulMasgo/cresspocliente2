import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Usuario } from '../models/usuario.models';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  UsuarioActivo:Usuario;

  constructor(public http:HttpClient) { }

  login(usuario:Usuario){
     let url = 'http://localhost:3000' + '/login'
     return this.http.post(url,usuario); 
  }

  registrar(usuario:Usuario){
    let url = 'http://localhost:3000' + '/usuario'
     return this.http.post(url,usuario); 
  }
  
}
