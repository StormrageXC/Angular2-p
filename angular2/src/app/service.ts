import {Injectable, Injector} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


/**
 * SpotifyService works querying the Spotify Web API
 * https://developer.spotify.com/web-api/
 */
export class LoginGuard{
  constructor() {
    console.log('data')
  }
  async canActivate(){
     return false;
 }
}
@Injectable()
export class SpotifyService {
  static BASE_URL: string = 'https://api.spotify.com/v1';
  constructor(public guard: LoginGuard) {
    console.log(guard)
  }
  fn(){

  }
}
const injector = Injector.create({
  providers:
      [{provide: SpotifyService, deps: [LoginGuard]}, {provide: LoginGuard, deps: []}]
});
