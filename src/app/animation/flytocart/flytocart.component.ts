import {Component, OnInit, ElementRef, Renderer} from '@angular/core';
import {trigger, state, style, transition, animate} from "@angular/animations";
import {HeaderService} from "../../share/service/header.service";
import {position} from "../../share/model/position.model";

declare const $:any;
@Component({
  selector: 'app-flytocart',
  templateUrl: './flytocart.component.html',
  styleUrls: ['./flytocart.component.css'],
  animations:[
    trigger('imageState',[
      state('original',style({

      })),
      state('added',style({
        'top': '10px',
        'right': '10px',
        'width': '20px',
        'height': '20px',
        'position':'absolute'
      })),
      transition('original => added',animate('800ms linear'))
    ])
  ]
})
export class FlytocartComponent implements OnInit {

  imgs = [
    {id:1,state:'original'},
    {id:2,state:'original'},
    {id:3,state:'original'},
    {id:4,state:'original'}
  ]
  cartposition:position = null;

  constructor(
    private elementRef:ElementRef,
    private renderer: Renderer,
    private headerService:HeaderService
  ) {

  }

  ngOnInit() {
    this.headerService.cartPostion$.subscribe((data)=>{
      console.log(data);
      this.cartposition = data;
    })
    if(!this.cartposition){
      this.cartposition = this.headerService.firstPosition;
    }
  }

  addToCart(img:any):void{
    for(let item of this.imgs){
      if(item.id == img.id){
        if(img.state == "added"){
          return;
        }
        else{
          item.state = "added";
          break;
        }
      }
    }
    let imgToCopy = this.elementRef.nativeElement.querySelector(`#img_${img.id}`);
    let imgParent = imgToCopy.parentElement;
    let imgClone = imgToCopy.cloneNode(false);
    console.log(imgToCopy.offsetLeft,imgToCopy.offsetTop)
    this.renderer.setElementStyle(imgClone,'position','absolute');
    this.renderer.setElementStyle(imgClone,'left',`${imgToCopy.offsetLeft}px`);
    this.renderer.setElementStyle(imgClone,'top',`${imgToCopy.offsetTop}px`);
    this.renderer.setElementStyle(imgClone,'width',`${imgToCopy.width}px`);
    this.renderer.setElementStyle(imgClone,'height',`${imgToCopy.height}px`);
    this.renderer.setElementStyle(imgClone,'z-index','100');
    imgClone.setAttribute("id",`img_clone_${img.id}`)
    imgParent.appendChild(imgClone);

    console.log(this.cartposition);
    $(`#img_clone_${img.id}`).animate({
      'top': this.cartposition.y,
      'left':  this.cartposition.x,
      'width': 0,
      'height': 0
    }, 500, 'linear');

    setTimeout(()=>{
      this.headerService.total +=1;
      this.headerService.changeCartCount(this.headerService.total);
    },500)

  }

}
