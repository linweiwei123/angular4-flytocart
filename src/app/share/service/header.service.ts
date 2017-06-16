/**
 * Created by Linweiwei on 2017/6/15.
 */

import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {position} from "../model/position.model";
@Injectable()
export class HeaderService{

  private cartPostion = new Subject<position>();
  public firstPosition;
  private cartCount = new Subject<number>();
  public total:number=0;

  cartPostion$ = this.cartPostion.asObservable();
  cartCount$ = this.cartCount.asObservable();

  changePosition(position){
    this.cartPostion.next(position);
    this.firstPosition = position;
  }

  changeCartCount(num:number){
    this.cartCount.next(num);
  }
}
