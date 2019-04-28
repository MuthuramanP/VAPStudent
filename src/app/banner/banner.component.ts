import { Component, OnInit, AfterViewInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit, AfterViewInit {

  public imagesUrl;

  constructor() {
    this.imagesUrl = [
      'assets/img/slides/nivo/img1.jpg',
      'assets/img/slides/nivo/img2.jpg',
      'assets/img/slides/nivo/img3.jpg',
      ];
   }

  ngOnInit() {
   
  }
  ngAfterViewInit() {
    $('#slider').nivoSlider();
    console.log('sdas');
  }

}
