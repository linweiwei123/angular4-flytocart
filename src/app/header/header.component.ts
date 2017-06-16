import {Component, OnInit, ElementRef, AfterViewInit, HostListener} from '@angular/core';
import {HeaderService} from "../share/service/header.service";
import {position} from "../share/model/position.model";

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit,AfterViewInit {

  private total:number = 0;

  constructor(
    private elementRef:ElementRef,
    private headerService:HeaderService
  ) { }

  ngOnInit() {
    this.headerService.cartCount$.subscribe((data)=>{
      this.total = data;
    });
  }

  ngAfterViewInit(){
    this.setCartPosition();
  }

  @HostListener('window:resize', ['$event'])
  onResize($event:any):void{
    this.setCartPosition();
  }

  setCartPosition():void{
    let cartDiv = this.elementRef.nativeElement.querySelector("ul>li#cart");
    let x = cartDiv.offsetLeft+24;
    let y = cartDiv.offsetTop+35;
    this.headerService.changePosition(new position(x,y));
    console.log(x,y);
  }
}
