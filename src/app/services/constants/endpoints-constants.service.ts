import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EndpointsConstantsService {

  constructor() { }

  BASE_URI = "http://localhost:8080/"
  GET_ALL_USERS_EMAILS = "http://localhost:8080/playdate/getAllUsers";
  GET_ALL_USERS = "http://localhost:8080/playdate/getNearByUsers";
  GET_UPDATE_PLAYDATE_REQUEST_INFO = "playdate/request/";
  POST_UPDATE_PLAYDATE_DETAILS = "playdate/update/playDateDetails";
  //SESSION INFO
  SESSION_EMAIL = "sessionemail";
}
