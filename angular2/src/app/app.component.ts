import { Component, Input,Injector} from '@angular/core';
import {SpotifyService} from './service';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular2';
  number= 0;
  kk: Observable<number>;
constructor(){
  this.kk = new Observable(subscriber => {
   setInterval(()=>{
    subscriber.next(this.number++);
   },3000)
  });;
}
}
