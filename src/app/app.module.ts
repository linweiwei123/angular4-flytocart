import { BrowserModule } from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {OperatorsModule} from "./operators/operators.module";
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';
import {ShareModule} from "./share/share.module";
import {HeaderComponent} from "./header/header.component";
import {AnimateModule} from "./animation/animate.module";
import {HeaderService} from "./share/service/header.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
// import {AngularFireModule} from "angularfire2";




const fireBaseConfig = {
  apiKey: "AIzaSyACjFa3-TXNTesftmE0XqQFu96NBsZFaao",
  authDomain: "flytocart.firebaseapp.com",
  databaseURL: "https://flytocart.firebaseio.com",
  projectId: "flytocart",
  storageBucket: "flytocart.appspot.com",
  messagingSenderId: "499472242833"
};


const appRoutes:Routes = [
  {
    path:'home',component:HomeComponent
  },
  {
    path:'operators',loadChildren:'./operators/operators.module#OperatorsModule'
  },
  {
    path:'animates',loadChildren:'./animation/animate.module#AnimateModule'
  },
  {
    path:'',
    redirectTo: '/animates',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '/animates', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    OperatorsModule,
    AnimateModule,
    RouterModule.forRoot(appRoutes),
    // AngularFireModule.initializeApp(fireBaseConfig),
    ShareModule
  ],
  providers: [HeaderService],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
