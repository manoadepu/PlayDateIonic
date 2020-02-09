import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EndpointsConstantsService {

  constructor() { }


  BASE_URI = "http://localhost:8080/playdate/"
  GET_ALL_USERS_EMAILS = "http://localhost:8080/playdate/getAllUsers";
  GET_ALL_USERS = "http://localhost:8080/playdate/getNearByUsers";
  GET_UPDATE_PLAYDATE_REQUEST_INFO = "playdate/request/";
  POST_UPDATE_PLAYDATE_DETAILS = "playdate/update/playDateDetails";

  //****************CONSTANT KEYWORDS******************************************************************************
  //SESSION INFO
  SESSION_EMAIL = "sessionemail";

  //******************************************ENDPOINTS************************************************************
  //EVENTS ENDPOINTS
  CREATE_NEW_EVENT = this.BASE_URI + "newEvent/"
  SEND_REQUEST = this.BASE_URI + "sendRequest/";
  UPCOMING_EVENTS = this.BASE_URI + "upcomingEvents/";
  REQUEST_FOR_RESPONSE = this.BASE_URI + "requestResponse/"
  VIEW_EVENT_DETAILS = this.BASE_URI + "/viewEventDetails/"
  GET_EVENTS_CREATED_BY = this.BASE_URI + "/playdatesCreatedBy/"

  //USER_DETAILS ENDPOINTS
  GET_USER_DETAILS = this.BASE_URI+"userdetails";
  UPDATE_USER_DETAILS = this.BASE_URI + "update/userdetails";
  GET_ALL_USER_EMAILS = this.BASE_URI + "getAllUsers";
  GET_NEAR_BY_EMAIL = this.BASE_URI + "getNearByUsers";

  //LOGIN ENDPOINTS
  LOGIN_VERIFICATION = this.BASE_URI + "playdate/login/verification";
  FORGOT_PASSWORD = this.BASE_URI + "forgotpassword";

  //REGISTRATION
  REGISTER = this.BASE_URI + "playdate/register"

  REQUESTED = "REQUESTED"
  ACCEPTED = "ACCEPTED"
  REJECTED = "REJECTED"
  MAYBE = "MAYBE"
}
