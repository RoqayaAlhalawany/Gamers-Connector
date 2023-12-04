import { Component, OnInit } from '@angular/core';
import { GetListOfPeersService } from '../get-list-of-peers.service';
import { GetMyPeersPayload } from './get-my-peers.payload';
import { SafeResourceUrl } from '@angular/platform-browser';
import { GetUploadedImageService } from '../get-uploaded-image.service';

@Component({
  selector: 'app-my-peers',
  templateUrl: './my-peers.component.html',
  styleUrls: ['./my-peers.component.scss']
})
export class MyPeersComponent implements OnInit {
  myPeers: GetMyPeersPayload[]; // Array to store the list of peers
  imgBlob: Blob; // Blob object to store the image data
  dataObjects: any[]; // Array to store processed data objects

  constructor(
    private peerList: GetListOfPeersService,
    private getPhotoService: GetUploadedImageService
  ) {
    // Initialize the arrays and objects
    this.myPeers = [];
    this.imgBlob = new Blob();
    this.dataObjects = [];
  }

  ngOnInit(): void {
    // Fetch the list of peers and process the data
    this.peerList.fetchPeersList().subscribe(data => {
      console.log(data);
      this.myPeers = data;

      for (let i = 0; i < this.myPeers.length; i++) {
        if (this.myPeers[i].profilePicture) {
          // If the peer has a profile picture, fetch and process it
          this.getPhotoService.getUploadedImage(this.myPeers[i].profilePicture.url).subscribe(data => {
            this.imgBlob = data;
            console.log(this.imgBlob);
            let reader = new FileReader();
            reader.readAsDataURL(this.imgBlob);
            reader.onload = (event: any) => {
              // Create a data object with the username and profile picture URL
              let dataObject = {
                userName: this.myPeers[i].username,
                profilePicture: event.target.result
              };
              this.dataObjects.push(dataObject);
            };
          });
        } else {
          // If the peer doesn't have a profile picture, create a data object without the picture
          let dataObject = {
            userName: this.myPeers[i].username,
            profilePicture: ''
          };
          this.dataObjects.push(dataObject);
        }
      }
    });
  }
}
