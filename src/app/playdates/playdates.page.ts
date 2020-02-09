import {Component, Inject, OnInit} from '@angular/core';
import {RequestPlayDateModalPage} from "../request-play-date-modal/request-play-date-modal.page";
import {ModalController} from "@ionic/angular";
import {ViewUpcomingPlaydatesPage} from "../view-upcoming-playdates/view-upcoming-playdates.page";
import {UpcomingPlayDatesModalPage} from "../upcoming-play-dates-modal/upcoming-play-dates-modal.page";
import {SearchNearByModalPage} from "../search-near-by-modal/search-near-by-modal.page";
import {SearchByUsernamePage} from "../search-by-username/search-by-username.page";
import {PlaydatesRequestedByMe, PlaydatesRequestedByOther, UserDetails} from "../models/UserDetails";
import {ProfileDetailsService} from "../services/profiledetails/profile-details.service";
import {SESSION_STORAGE, StorageService} from "angular-webstorage-service";
import {Event, UpcomingEvent} from "../models/Event";
import {SendRequestToUserService} from "../services/events/sendRequestToUserForEvent/send-request-to-user.service";
import {EndpointsConstantsService} from "../services/constants/endpoints-constants.service";
import {ShowRequestedPlayDatesModalPage} from "../modals/show-requested-play-dates-modal/show-requested-play-dates-modal.page";
import {ViewEventDetailsModalPage} from "../modals/view-event-details-modal/view-event-details-modal.page";
import {PlayDatesCreatedByUserPage} from "../modals/play-dates-created-by-user/play-dates-created-by-user.page";

@Component({
  selector: 'app-playdates',
  templateUrl: './playdates.page.html',
  styleUrls: ['./playdates.page.scss'],
})
export class PlaydatesPage implements OnInit {

  showStatusOfRequests=true;
  showYouHaveNewRequests=false;
  showUpcomingPlayDates=false;
  showRequestedPlayDates = false;
  events: Event[];
  eventdetail:Event;

  constructor(public modalController: ModalController,
              private profileDetailsservice: ProfileDetailsService,
              @Inject(SESSION_STORAGE) private storage: StorageService,
              private eventsService: SendRequestToUserService,
              private constants: EndpointsConstantsService) { }

  upcomingEvents: UpcomingEvent[]=[];
  upcomingRequestedEvents: UpcomingEvent[]=[];
  allDataFetched = false;

  ngOnInit() {
      // this.eventsService.getUpcomingEvents(this.storage.get(this.constants.SESSION_EMAIL)).subscribe((eve))
    this.youHaveNewRequests();
    this.statusOfRequests();
    this.playdatesCreatedByMe();
    this.upcomingPlayDates();

    console.log(this.upcomingEvents.length);
  }
  async showUpcomingPlayDatesModal() {
    //TODO: load this async after the data is loaded
    await this.delay(300);

    const modal = await this.modalController.create({
      component: UpcomingPlayDatesModalPage,
      componentProps: {
        //TODO: get email from session and send to modal
        'upcomingEvents': this.upcomingEvents
      }
    });
    return await modal.present();
    }

  async searchByUsernameModa() {
    //TODO: this should wait till the upcoming data is loaded in future
    const modal = await this.modalController.create({
      component: SearchByUsernamePage,
      componentProps: {
        //TODO: get email from session and send to modal
        'email': "testing email value in search near by modal page sent from ts page."
      }
    });
    return await modal.present();
  }
  async requestedPlayDatesModal() {
    //TODO: this should wait till the upcoming data is loaded in future
    const modal = await this.modalController.create({
      component: ShowRequestedPlayDatesModalPage,
      componentProps: {
        "requestedPlayDates": this.upcomingRequestedEvents
      }
    });
    return await modal.present();
  }

  async searchNearByModal() {

    const modal = await this.modalController.create({
      component: SearchNearByModalPage,
      componentProps: {
        //TODO: get email from session and send to modal
        'email': "testing email value in search near by modal page sent from ts page."
      }
    });
    return await modal.present();
  }

  async viewEventDetailsModal() {
    await this.delay(300);
    const modal = await this.modalController.create({
      component: ViewEventDetailsModalPage,
      componentProps: {
        'eventdetail': this.eventdetail
      }
    });
    return await modal.present();
  }

  async playdatesCreatedByUser(){
    await this.delay(300);
    const modal = await this.modalController.create({
      component: PlayDatesCreatedByUserPage,
      componentProps: {
        'events': this.events
      }
    });
    return await modal.present();

  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  //TODO: start from here, i need to pass requestedPlaydates to display // or display it in the same page here and dont use a modal for upcoming playdates.
  upcomingPlayDates(){
    console.log("upcomingPlayDatesModal");
    this.eventsService.getUpcomingEvents(this.storage.get(this.constants.SESSION_EMAIL), this.constants.ACCEPTED).subscribe((upcomingEvents: UpcomingEvent[]) => {
      if(upcomingEvents.length>0){
        this.showUpcomingPlayDates=true;
      }
      this.upcomingEvents = upcomingEvents;
      this.allDataFetched=true;
    });

    // this.showUpcomingPlayDatesModal();
  }

  youHaveNewRequests(){
    this.eventsService.getUpcomingRequestedEvents(this.storage.get(this.constants.SESSION_EMAIL)).subscribe((upcomingRequestedEvents: UpcomingEvent[])=>{
      console.log("RequestedPlayDates Length:"+ upcomingRequestedEvents.length);
      if(upcomingRequestedEvents.length>0){
        this.showRequestedPlayDates=true;
        this.upcomingRequestedEvents = upcomingRequestedEvents;
      }
    })
  }

  statusOfRequests(){}
  playdatesCreatedByMe() {
    console.log("***************playdatesCreatedByMe**************");
    this.eventsService.getEventsCreatedBy(this.storage.get(this.constants.SESSION_EMAIL)).subscribe((events: Event[])=>{
      console.log("event guid from playdates-playdatesCreatedByMe()   "+events[0].eventGuid);
      if(events.length>0){
        this.events = events;
        this.showYouHaveNewRequests=true;
      }

    })
  }

  updateStatus(eventGuid: string, status: string){
    console.log(eventGuid);
    this.eventsService.respondToRequest(eventGuid, this.storage.get(this.constants.SESSION_EMAIL),status).subscribe();
  }

  viewEventDetails(eventGuid: string){
    this.eventsService.viewEventDetails(eventGuid).subscribe((eventdetail:Event)=>{
      console.log("participant length: "+eventdetail.participants.length);
      if(eventdetail!=null || eventdetail!=undefined){
        this.eventdetail=eventdetail;
        this.viewEventDetailsModal();
      }
    })
  }
}
