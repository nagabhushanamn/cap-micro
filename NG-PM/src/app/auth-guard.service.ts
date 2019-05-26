import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // check for access token, if exist
    // if (sessionStorage.getItem("access-token")) {
    //   return true
    // } else {
    //   this.router.navigate(['/login'])
    //   return false;
    // }
    return true;
  }

}
