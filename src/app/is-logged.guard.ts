import {ActivatedRouteSnapshot, CanActivate, CanActivateFn, RouterStateSnapshot} from '@angular/router';
// import {Observable, map} from 'rxjs';
import {inject, Injectable} from "@angular/core";
import {UserService} from "./user.service";

// @Injectable({
//   providedIn: 'root'
// })

// export class isLoggedGuardService implements CanActivate {
//
//   constructor(private userService: UserService) {}
//
//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
//     this.userService.isUserLoggedIn.pipe(
//       map((isLoggedIn) => {
//         if (isLoggedIn) {
//           return true;
//         } else {
//           return false;
//         }
//       })
//     )
//   }
//
// }

export const isLoggedGuardFn: CanActivateFn = (route, state) => {
  return inject(UserService).isUserLoggedIn;
};
