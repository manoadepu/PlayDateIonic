import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Event} from "../../../models/Event";
import {EndpointsConstantsService} from "../../constants/endpoints-constants.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SendRequestToUserService {

  constructor(private httpClient: HttpClient, private endpoints: EndpointsConstantsService) { }

  sendRequestToUserForEvent(email, requestSentTo){}

     createNewEvent(email, event:Event):Observable<any>{
      console.log("In create event service"+email);
         return this.httpClient.post(this.endpoints.CREATE_NEW_EVENT+email, event,{responseType: 'text'});
    }

    getUpcomingEvents(email: string, status: string){
      return this.httpClient.get(this.endpoints.UPCOMING_EVENTS+email+"/"+status);
    }

    getUpcomingRequestedEvents(email: string){
      return this.httpClient.get(this.endpoints.UPCOMING_EVENTS+"/"+email+"/"+this.endpoints.REQUESTED)
    }

    getUpcomingAcceptedEvents(email: string){
        return this.httpClient.get(this.endpoints.UPCOMING_EVENTS+"/"+email+"/"+this.endpoints.ACCEPTED)
    }

    respondToRequest(eventGuid: string, email:string, status: string){
      console.log("respond to request: "+ this.endpoints.REQUEST_FOR_RESPONSE+eventGuid+"/"+email+"/"+status);
      return this.httpClient.get(this.endpoints.REQUEST_FOR_RESPONSE+eventGuid+"/"+email+"/"+status)
    }

    viewEventDetails(eventGuid: string){
        return this.httpClient.get(this.endpoints.VIEW_EVENT_DETAILS+eventGuid)
    }

    getEventsCreatedBy(email: string){
      console.log("*********************** In get events created by ***********************");
      // "http://localhost:8080/playdate/playdatesCreatedBy/"
      console.log(this.endpoints.GET_EVENTS_CREATED_BY+email);

      return this.httpClient.get("http://localhost:8080/playdate/playdatesCreatedBy/"+email);
    }
}
