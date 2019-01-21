import { Component, OnInit } from '@angular/core';
import { FUNCTION_TYPE, THIS_EXPR } from '@angular/compiler/src/output/output_ast';
declare var $: any;
import * as bootstrap from 'bootstrap';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: []
})
export class ProductsComponent implements OnInit {

    productos:Producto[]=[];

  constructor(public _productoService:ProductoService) { }

  ngOnInit() {
    this.cargarProductos();
  }
  

  cargarProductos(){
      this._productoService.listarProductos()
      .subscribe((res:any) => {this.productos = res.Productos})
  }
 

}
