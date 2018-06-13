import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DataService } from './data-service.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private dataServ: DataService, private _router: Router) { }

  canActivate() {
    console.log(this.dataServ.isUserAuthenticated())
    // if (!this.dataServ.isUserAuthenticated()) {
    //   this._router.navigate(["login"]);
    // }
    return true;
  }
}
