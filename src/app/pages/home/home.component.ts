import { Component, OnInit, ViewChild, AfterContentInit } from '@angular/core';
declare var $: any;
import * as jquery from 'jquery';
import {owlCarousel} from '../../../assets/js/owl.carousel.js'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { 
    
  }

  
  ngOnInit() {
   
  }
  
 

  // ngAfterViewInit(): void {

  //   //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //   //Add 'implements AfterViewInit' to the class.
  //     jquery(window).on('load',function() {
  //     $("#owl-demo").owlCarousel({
  //         items: 3,
  //         lazyLoad: true,
  //         autoPlay: true,
  //         pagination: false,
  //     }) ;
  // });
  // }
  
  
  
  

}
