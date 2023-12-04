import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { GetPeerRequestsAsNotificationService } from '../get-peer-requests-as-notification.service';
import { NotificationsPayload } from './notifications.payload';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  bellDown: boolean; // Indicates whether the bell icon is clicked and the notifications are expanded
  notifications: NotificationsPayload[]; // Array of notifications

  constructor(private authService: AuthService, private getPeerRequests: GetPeerRequestsAsNotificationService) {
    this.bellDown = false;
    this.notifications = [];
  }

  ngOnInit(): void {
  }

  /**
   * Retrieves peer requests as notifications and updates the 'notifications' array
   */
  getRequests(): void {
    this.getPeerRequests.getPeerRequestsNotifications().subscribe(data => {
      console.log(data);
      this.notifications = data;
    });
  }

  /**
   * Checks if the user is currently logged in
   * @returns True if the user is logged in, false otherwise
   */
  checkIfUserLoggedIn(){
    return this.authService.isUserLoggedIn();
  }

  /**
   * Toggles the visibility of notifications and fetches the notifications if the bell is down
   */
  expandingNotifications(): void {
    this.bellDown = !this.bellDown;
    if (this.bellDown) {
      this.getRequests();
    } else {
      this.notifications = [];
    }
    console.log(this.bellDown);
  }

  /**
   * Sets the 'bellDown' property to false when the user logs out
   */
  shrinkingNotificationWhenLogout(): void {
    this.bellDown = false;
  }
}
