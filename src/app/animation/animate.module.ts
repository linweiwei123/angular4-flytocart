import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlytocartComponent } from './flytocart/flytocart.component';
import {RouterModule, Routes} from "@angular/router";
const routes:Routes = [
  {
    path:'',component:FlytocartComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FlytocartComponent]
})
export class AnimateModule { }
