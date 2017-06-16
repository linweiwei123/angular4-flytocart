import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter/filter.component';
import {Routes, RouterModule} from "@angular/router";

const operatorsRoutes:Routes = [
  {
    path:'',component:FilterComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(operatorsRoutes)
  ],
  declarations: [FilterComponent]
})
export class OperatorsModule { }
