import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.models';
import swal from 'sweetalert';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  extensionesPer:string[]=['gmail.com','hotmail.com','continental.edu.pe']
  valor:boolean = true ;

  constructor(public _usuarioService:UsuarioService) { }

  ngOnInit() {
  }

  

  validar(nombre:string,apellido:string,correo:string,telefono:string,password:string,password2:string){

    let usuario = new Usuario(`${nombre} ${apellido}`,correo,password,telefono);
    let campos = [nombre,apellido,correo,telefono,password];
    let vacio = false;
    for (let i = 0; i < campos.length; i++) {
      if(campos[i].length <= 0 ){
          vacio = true;
          break;
      }
    }

    
    let correoCortado = correo.split('@');
    let extension = correoCortado[correoCortado.length -1 ];
    if(this.extensionesPer.indexOf(extension) < 0){
      swal('Error','El correo no es valido','warning')
    }else{
      if(vacio === true){
        swal('Error','Ningun campo puede estar vacio','warning')
      }else{
        if(password != password2){
          swal('Error','Las contraseñas no coinciden','warning')
        }else{
          this.registrar(usuario);
        }      
      }
    }
  }


  registrar(usuario:Usuario){
    this._usuarioService.registrar(usuario)
    .subscribe((res:any) => {
      if(res.ok === true){
        swal('Bienvenido',`Hola ${res.usuario.nombre}` , 'success')
      }else{
        console.log(res);
        swal('Error','Upps algo mal intentalo nuevamente');
      }
    });
  }

}
