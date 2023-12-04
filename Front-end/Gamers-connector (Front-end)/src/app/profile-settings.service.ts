import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  // The service is provided at the root level, making it available for injection throughout the application
})
export class ProfileSettingsService {

  constructor() { 
    // The constructor is empty as there are no dependencies to inject
  }
}
