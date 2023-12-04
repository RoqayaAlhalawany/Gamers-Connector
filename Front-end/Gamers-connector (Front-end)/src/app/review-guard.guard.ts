import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { GetOthersProfileService } from './get-others-profile.service';
import { GetOthersDetailsPayload } from './others-profile/get-others-details.payload';

@Injectable({
  providedIn: 'root'
})
export class ReviewGuardGuard implements CanActivate {
  otherPlayerData: GetOthersDetailsPayload;

  constructor(
    private getOtherProfileDetailsService: GetOthersProfileService,
    private actvRoute: ActivatedRoute,
    private router: Router
  ) {
    // Initialize otherPlayerData with default values
    this.otherPlayerData = {
      firstName: '',
      lastName: '',
      username: '',
      handles: [],
      country: {
        name: ''
      },
      requested: false,
      otherRequested: false,
      peer: false,
      discordTag: '',
      profilePicture: {
        id: '',
        type: '',
        size: 0,
        url: ''
      },
      reviewed: false
    };
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | boolean | UrlTree {
    // Check if 'enteredOtherProfile' is set in localStorage
    let entered = localStorage.getItem('enteredOtherProfile');
    if (entered) {
      // Fetch other player details from the service
      this.getOtherProfileDetailsService
        .getOthersDetails(entered)
        .subscribe((data) => {
          this.otherPlayerData = data;
          if (this.otherPlayerData.reviewed) {
            // If the other player has been reviewed, navigate to profile page
            let url = 'profile/';
            this.router.navigate([url]);
            return false;
          } else {
            // Allow access to the review page
            return true;
          }
        });
    } else {
      // If 'enteredOtherProfile' is not set, navigate to profile page
      this.router.navigate(['/profile']);
      return false;
    }
    console.log(entered);
    return true;
  }
}



  // checkIfReviewedIsTrue(){
  //   let userName = this.actvRoute.snapshot;
  //   console.log("U dont have accesss for the review page again!");
  //   console.log(userName);

  //    return this.getOtherProfileDetailsService.getOthersDetails(userName).
  //    pipe(map(data=>{
  //     if(data.reviewed === true){
  //       this.router.navigate(['profile']);
  //       return true;
  //     }
  //    }))


  // }

