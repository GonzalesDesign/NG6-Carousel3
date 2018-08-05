


/***************************************************
* Project: R.Lloyd Gonzales Portfolio Website
* URL: RLGonzales.com
* Contact: rolandolloyd@gmail.com
* Copyright © 2018 GonzalesDesign
* Platform: Angular 6
* Component Name: Carousel3Component
* Note: Update animation engine to GSAP from AnimeJS
****************************************************/


import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { Carousel3DataService } from '../../services/carousel3-data.service';
import { Carousel3SliderService } from './../../services/carousel3-slider.service';
import { FunksionsService } from './../../services/funksions.service';
import { LoaderAnimService } from './../../services/loader-anim.service';
// import { map, throttleTime } from 'rxjs/operators';
// import 'rxjs/add/operator/map';
import viewportSize from 'viewport-size/viewportSize';
// import { TweenMax, TimelineMax } from 'gsap';
import { Power2, Elastic } from "gsap/TweenMax";
// import { CreateSvgService } from '../../services/create-svg.service';

@Component({
  selector: 'app-carousel3',
  templateUrl: './carousel3.component.html',
  styleUrls: ['./carousel3.component.scss']
})
export class Carousel3Component implements OnInit, AfterViewInit {

  public photos = [];
  public photosLength: number;
  public foto = '.image';
  public fotoWidth: number;
  public fotoHeight = 100;
  public mainContainer = '#main-kontainer-id'; // image frame mask
  // public imgsFrame = '.main-kontainer'; // image frame mask
  public mainContainerWidth: number;
  public imageKontainer = ('#rlg-image-kontainer-id'); // photos strip
  public imageNameKontainer = '.image-name-kontainer';
  public imgKontainerWidth: number;
  public imageNameKontainerProp = { width: 0, height: 0 }; // using with properties

  public loading = '.loading';
  public loadingKontainer = '.loading-kontainer';
  // public loadingKontainerId = 'loading-kontainer-id';
  // public loadingProp = 'LOADING...';
  public timeout = 5000;
  public topbarId = '#top-bar-id';
  public componentLabel = '.rlg-component-label';

  // public dynLoadngKontainerId = '#dynamic-loading-kontainer-id';
  // public imgCount = 3;
  // public i = 0;
  // public imgOrientation: string;
  // public circle: HTMLElement;


  public screenWidth: number = window.innerWidth;
  public marginsx = 0; // 28 * 3;
  public imgsToDisplay: number; // = 3;

  public arrowButtonsKontainer = ('.arrow-buttons-kontainer');
  public arrowButtonsKontainerId = ('#arrow-buttons-kontainer-id')
  public leftArrowButtonsKontainer = ('.left-button-kontainer');
  public rightArrowButtonsKontainer = ('.right-button-kontainer');

  // public screenWidth: any;


  constructor(
        private _carousel3DataService: Carousel3DataService,
        private _carousel: Carousel3SliderService,
        private _funksions: FunksionsService,
        private _loaderAnim: LoaderAnimService) { }
        // private _hostlistener: HostlistenerService

  ngOnInit() {
    this._funksions.fDisplay(this.topbarId, 'block');
    this._funksions.fTMxFrX(this.componentLabel, 4, -(this.screenWidth), Elastic.easeOut);

    // this._createSVG.fReadyState('arc1');
    // this._createSVG.fCreateSVG();

    this._carousel3DataService.carousel3Data()
      // .pipe(
      //   throttleTime(1000)
      // )
      .subscribe(data => {this.photos = data;
        this.photosLength =  data.length;
        this._funksions.fDisplay(this.loadingKontainer, 'flex'); // show loader
        this._loaderAnim.fArchSVG();
        this._funksions.fLoadTimer(this.loading, this.timeout / 1000);
        // this._loaderAnim.fArch(10, 30, 1.5, 2, '50, 200, 120');
        // data is in but not outside .subscribe

      });
        // hide element. testing loading...
        this._funksions.fDisplay(this.mainContainer, 'none');
        this.resizeMe();
        this.fTestTime();

        // this._funksions.fElementXPosition(this.componentLabel, -(this.screenWidth));
        // TweenMax.to(this.componentLabel, 0, {x: -(this.screenWidth)});
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.fSliderInit();
    }, this.timeout);
  }

  fTestTime() {
    setTimeout(() => {
      this._funksions.fRemoveLoader(this.loadingKontainer, 'none', .5); // remove loader
      this._funksions.fDisplay(this.mainContainer, 'block'); // display mainContainer
      this._funksions.fTLMx(this.mainContainer, this.imageNameKontainer); // animate images and titles
    }, this.timeout);
  }

  /*--- fSliderInit() : Pass this value from .subscribe to outside property ---*/
  fSliderInit() {

    // this._createSVG.fReadyState(this.dynLoadngKontainerId); // arc1
    // this._createSVG.fReadyState('arc1'); // arc1

    this.mainContainerWidth = (this.screenWidth - this.marginsx);
    this.fotoWidth = (this.screenWidth - this.marginsx) / this.imgsToDisplay;
    this.imgKontainerWidth = (this.fotoWidth * this.photosLength);
    this.imageNameKontainerProp.width = (this.fotoWidth * this.photosLength);
    console.log('this.imgKontainerWidth: ', this.imgKontainerWidth);
    // console.log('this.fotoWidth: ', this.fotoWidth);
    // console.log('this.photosLength: ', this.photosLength);
    // console.log('this.marginsx: ', this.marginsx);
    // console.log('this.imgsToDisplay: ', this.imgsToDisplay);
    console.log('this.screenWidth: ', this.screenWidth);
    console.log('this.imageNameKontainerProp.width: ', this.imageNameKontainerProp.width);

    // console.log('this.mainContainerWidth: ', this.mainContainerWidth);
    this.fElementWidth(this.mainContainer, this.mainContainerWidth + 'px'); // can be assigned in view
    this.fElementWidth(this.imageKontainer, this.imgKontainerWidth + 'px'); // can be assigned in view
    this._funksions.fElementWidth(this.arrowButtonsKontainer, this.mainContainerWidth);
    this._funksions.fElementYPosition(this.arrowButtonsKontainer, (this.fotoHeight / 2 )); // (this.fotoHeight / 2 ));
    this.fArrowButtons(this.rightArrowButtonsKontainer, (this.mainContainerWidth - 200 - 28) + 'px');

    /* when resizing window, images shouldn't be cut off
       use commonCounter to dictate the last xposition to be used as a pin point */
    // this.fSlideRight(); // kinda works!
    this._carousel.fSlideCarousel(this.imageKontainer,    // elem
                                  'none',                 // slideDirection
                                  this.fotoWidth,         // imgWidth
                                  this.imgsToDisplay,     // imgsToDisplay
                                  this.imgKontainerWidth  // imgKontainerWidth
                                );
    // this._funksions.fElementXPosition(this.imageKontainer, -4462.888888888889);
    // this._funksions.fElementXPosition(this.imageKontainer, (this._carousel.commonCounter * this.mainContainerWidth));
    // console.log('this._carousel.commonCounter * this.mainContainerWidth: ', this._carousel.commonCounter * this.mainContainerWidth);
  }

  /*-- method call from view when pressing the right button --*/
  fSlideLeft() {
    this._carousel.fSlideCarousel(this.imageKontainer, 'left', this.fotoWidth, this.imgsToDisplay, this.imgKontainerWidth);
  }

  /*-- method call from view when pressing the left button --*/
  fSlideRight() {
    this._carousel.fSlideCarousel(this.imageKontainer, 'right', this.fotoWidth, this.imgsToDisplay, this.imgKontainerWidth);
  }

  /*-- called inside fSliderInit --*/
  fArrowButtons(e, xPos) {
    const x = document.querySelector(e), s = x.style;
    s.left = xPos;
  }

  /*-- called inside fSliderInit --*/
  fElementWidth(e, w) {
    const x = document.querySelector(e), s = x.style;
    s.width = w;
    // console.log('e | w: ', e, ' | ', w);
  }

  // @HostListener('window:resize', ['$event'])
 /*  public fHost() {
    this._hostlistener.HostlistenerService(this.screenWidth, this.imgsToDisplay, this.fSliderInit());
  } */


  /**********---== RESPONSIVENESS ==---**********/

  /*---- Viewport Resize ----*/
  @HostListener('window:resize', ['$event'])
  // @HostListener(this._windowRef._window(), ['$event'])
  onResize(event) {
    this.resizeMe();
  }

  /*---- Screen Resize: Media Queries
   * Note: Next and Previous events work with commonCounter ----*/

  public resizeMe() {
    // console.log('resizeMe:------------------------');

    this.screenWidth = viewportSize.getWidth(); // window.screenWidth;

    // console.log('commonCounter fr service: ', this._carousel.commonCounter);
    // console.log('kontainer pos: ', this._funksions.fElementXPosition(this.imageKontainer, -5000));

    /*--- Resetting photo strip x position ---*/
    // const imgs2Disp = this.imgsToDisplay; // images to display on screen based on screen innerwidth
    const totalImgsWidth = this.imgKontainerWidth; // total width of all images side by side
    const photoStripSetCount = (totalImgsWidth / this.mainContainerWidth); // imgs2Disp); // this.mainContainerWidth
    // const newPhotoStripXPos = (photoStripSetCount * this._carousel.commonCounter);
    // const newPhotoStripXPos2 = (photoStripSetCount * this._carousel.commonCounter);
    const commonCounterLastIndex = Math.round(photoStripSetCount - 1);

    // console.log('imgs2Disp: ', imgs2Disp);
    // console.log('totalImgsWidth: ', totalImgsWidth);
    // console.log('photoStripSetCount: ', photoStripSetCount);
    // console.log('newPhotoStripXPos: ', newPhotoStripXPos);
    // console.log('newPhotoStripXPos2: ', newPhotoStripXPos2);
    // console.log('commonCounterLastIndex: ', commonCounterLastIndex);
    // console.log('this._carousel.endOfStrip: ', this._carousel.endOfStrip);

    /*--- Reset last commonCounter index ---*/
    if (this._carousel.endOfStrip) {
      this._carousel.commonCounter = -(commonCounterLastIndex);
      // console.log('this._carousel.commonCounter: ', this._carousel.commonCounter);
    }

    /*---- Media queries ----*/
    if ( this.screenWidth >= 1300 ) {
      // console.log('this.screenWidth: ', this.screenWidth);
      this.imgsToDisplay = 4;
      this.fSliderInit();

    } else if ( this.screenWidth < 1299 && this.screenWidth >= 900 ) {
      // console.log('this.screenWidth: ', this.screenWidth);
      this.imgsToDisplay = 3;
      this.fSliderInit();

    } else if ( this.screenWidth < 899 && this.screenWidth >= 640 ) {
      // console.log('this.screenWidth: ', this.screenWidth);
      this.imgsToDisplay = 2;
      this.fSliderInit();

    } else {
      // console.log('this.screenWidth: ', this.screenWidth);
      this.imgsToDisplay = 1;
      this.fSliderInit();
    }
  }



}
