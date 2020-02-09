import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from "rxjs";
import {UserDetails} from "../../models/UserDetails";
import {catchError, retry} from "rxjs/operators";
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {EndpointsConstantsService} from "../constants/endpoints-constants.service";

@Injectable({
  providedIn: 'root'
})
export class ProfileDetailsService {
  getUserDetailUrl = 'http://localhost:8080/playdate/userdetails/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  constructor(private httpClient: HttpClient,
              private endpoints: EndpointsConstantsService) {}

  getUserDetails(email: string){
    console.log("Hitting: "+ this.endpoints.GET_USER_DETAILS+"/"+email);
      return this.httpClient.get(this.endpoints.GET_USER_DETAILS+"/"+email);
  }

  //ErrorHandling
  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      //Get client side error
      errorMessage = error.error.message;
    }
    else {
      //Get server side error
      errorMessage = 'Error Code: ${error.status}\n Message: ${error.message}';
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
