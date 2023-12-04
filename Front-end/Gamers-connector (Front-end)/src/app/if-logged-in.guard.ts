import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { ToastrService } from './toastr.service';

@Injectable({
  providedIn: 'root'
})
export class IfLoggedInGuard implements CanActivate {
  
  constructor(private router: Router, private authService: AuthService, private toastr: ToastrService) {}
  
  // This method is called by the Angular router to determine if a route can be activated or not
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Check if the user is already logged in
    if (this.authService.isUserLoggedIn()) {
      console.log("You don't have the right to access any of the login/home/register page while you are logged in!");

      // Redirect the user to the 'profile' route
      this.router.navigate(['profile']);

      // Return false to prevent access to the requested route
      return false;
    } else {
      // If the user is not logged in, allow access to the requested route
      return true;
    }
  }
}
