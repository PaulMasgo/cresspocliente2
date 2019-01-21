import { Injectable } from '@angular/core';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor() { }

  subirArchivo(archivo:File,id:string){

        return new Promise((resolve,reject)=>{
           let formData = new FormData();
           let xhr = new XMLHttpRequest();
           formData.append('imagen',archivo,archivo.name);
              xhr.onreadystatechange = ()=>{
              if(xhr.readyState === 4){
                  if(xhr.status === 200){
                  console.log('Imagen subida');
                  resolve(xhr.response);
                }else{
                  console.log('fallo la subida');
                  reject(xhr.response);
                }
            };
        };

        let url = 'http://localhost:3000/' + 'usuario/img/'+id;
        xhr.open('POST',url,true);
        xhr.send(formData);
      })

       
  }

}
