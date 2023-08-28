import { Injectable } from '@angular/core';
import { ErrorHandler } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService implements ErrorHandler {

  constructor(private router:Router) { }

  handleError(error: any): void {
    console.log(error);
    this.router.navigate(['error']);
  }
}


