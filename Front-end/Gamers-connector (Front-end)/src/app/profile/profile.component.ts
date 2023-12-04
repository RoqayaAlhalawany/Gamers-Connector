import { Component, OnInit } from '@angular/core';
import { PlayerDetailsService } from "../player-details.service";
import { ProfileDetailsGetPayload } from "./profile-details-get.payload";
import { GetUploadedImageService } from "../get-uploaded-image.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  playerDetails: ProfileDetailsGetPayload; // Holds the profile details of the player
  imgBlob: Blob; // Blob object representing the profile picture image file
  imgSrc: string; // Base64 encoded string representing the image source

  constructor(
    private pdService: PlayerDetailsService,
    private getPhotoService: GetUploadedImageService
  ) {
    // Initialize the properties with default values
    this.playerDetails = {
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      discordTag: '',
      handles: [],
      profilePicture: {
        id: '',
        type: '',
        size: 0,
        url: ''
      },
      country: {
        name: ''
      }
    };
    this.imgSrc = '';
    this.imgBlob = new Blob();
  }

  ngOnInit(): void {
    // Fetch the player details from the service when the component initializes
    this.pdService.getPlayerDetails().subscribe(data => {
      this.playerDetails = data; // Store the retrieved player details
      console.log(this.playerDetails);
      if (this.playerDetails.profilePicture) {
        // If a profile picture is available
        this.getPhotoService.getUploadedImage(this.playerDetails.profilePicture.url).subscribe(data => {
          this.imgBlob = data; // Store the retrieved image blob
          console.log(this.imgBlob);
          let reader = new FileReader();
          reader.readAsDataURL(this.imgBlob);
          reader.onload = (event: any) => {
            this.imgSrc = event.target.result; // Convert the image blob to base64 and assign it to imgSrc
          }
        })
      }
    });
  }
}
