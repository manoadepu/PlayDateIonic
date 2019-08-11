import { Injectable } from '@angular/core';
import {PlayDates} from "../../models/PlayDates";
import {HttpClient} from "@angular/common/http";
import {EndpointsConstantsService} from "../constants/endpoints-constants.service";

@Injectable({
  providedIn: 'root'
})
export class UpdatePlayDateInformationService {

  constructor(private httpClient: HttpClient,
              private constants: EndpointsConstantsService) { }

  updatePlayDateInfo(playdateInfo: PlayDates){
    console.log("In update play date information service");
    this.httpClient.post(this.constants.BASE_URI + this.constants.POST_UPDATE_PLAYDATE_DETAILS, playdateInfo).subscribe((val)=> {
      console.log(val);
  })
}

  updatePlayDateRequestInfo(requestSentBy: String, requestSentTo){
    console.log("in update play date information service");
    this.httpClient.get("http://localhost:8080/userDetails");
    this.httpClient.get(this.constants.BASE_URI+this.constants.GET_UPDATE_PLAYDATE_REQUEST_INFO+requestSentBy+"/"+requestSentTo);
  }
}
