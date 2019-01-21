import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.models';
import { UsuarioService } from '../../services/usuario.service';
import { UploadService } from '../../services/upload.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  usuario:Usuario;
  imagen:File;

  constructor(public _usuarioService:UsuarioService,public _uploadService:UploadService) { }

  ngOnInit() {
    if(this._usuarioService.UsuarioActivo){
      this.usuario=this._usuarioService.UsuarioActivo
      this.usuario.imagen = 'http://localhost:3000/img/usuarios/' + this.usuario.imagen 
    }else{
      console.log('no hay usuario');
    }
    
  }

  seleccionImagen(event:File){
    if(!event){
      this.imagen = null
      return
    }
    this.imagen = event;
  }

  Enviarimagen(){
    this._uploadService.subirArchivo(this.imagen,this.usuario._id)
    .then(res => console.log(res))
    .catch(err => err);
  }

}
