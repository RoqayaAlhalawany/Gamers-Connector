import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // Selector used to identify this component in HTML templates
  templateUrl: './app.component.html', // The external HTML template file for this component
  styleUrls: ['./app.component.scss'] // External style files (SCSS) for this component
})
export class AppComponent {
  title = 'GP'; // Property that holds the title of the component
  
  // Other component logic can be implemented here
}
