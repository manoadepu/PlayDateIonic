import { Injectable } from '@angular/core';
import {PlayDates} from "../../models/PlayDates";
import {HttpClient} from "@angular/common/http";
import {EndpointsConstantsService} from "../constants/endpoints-constants.service";

@Injectable({
  providedIn: 'root'
})
export class UpdatePlayDateInformationService {
eventGuid
  constructor(private httpClient: HttpClient,
              private endpoints: EndpointsConstantsService) { }

  sendRequest(email: string, eventGuid: string){
      this.httpClient.get(this.endpoints.SEND_REQUEST+eventGuid+"/"+email).subscribe((val)=> {
  })
}

  updatePlayDateRequestInfo(requestSentBy: String, requestSentTo){
    console.log("in update play date information service");
    this.httpClient.get("http://localhost:8080/userDetails");
    this.httpClient.get(this.endpoints.BASE_URI+this.endpoints.GET_UPDATE_PLAYDATE_REQUEST_INFO+requestSentBy+"/"+requestSentTo);
  }
}
