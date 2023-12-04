import { Injectable } from '@angular/core';
declare let toastr: any;

@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  constructor() { }

  success(message: string) {
    // Display a success toast with the given message
    toastr.success(message);
  }

  info() {
    // Display an info toast
    toastr.info();
  }

  warning() {
    // Display a warning toast
    toastr.warning();
  }

  error() {
    // Display an error toast
    toastr.error();
  }
}
