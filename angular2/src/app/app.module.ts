import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,Injectable} from '@angular/core';
import { Routes,RouterModule,CanActivate } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpotifyService } from './service';
import { CbwComponent ,NgBookIf} from './cbw/cbw.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
@Injectable()
export class LoginGuard implements CanActivate{
   async canActivate(){
      return false;
  }
}
const route:  Routes = [
  {path:'', redirectTo:'home', pathMatch: 'full'},
  {path:'home', component:AppComponent},
  {path:'cbw', component:CbwComponent, canActivate: [LoginGuard]}

]
@NgModule({
  declarations: [
    AppComponent,
    CbwComponent,
    NgBookIf
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(route)
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
