import {Component, Inject, OnInit} from '@angular/core';
import {RequestPlayDateModalPage} from "../request-play-date-modal/request-play-date-modal.page";
import {ModalController} from "@ionic/angular";
import {ViewUpcomingPlaydatesPage} from "../view-upcoming-playdates/view-upcoming-playdates.page";
import {UpcomingPlayDatesModalPage} from "../upcoming-play-dates-modal/upcoming-play-dates-modal.page";
import {SearchNearByModalPage} from "../search-near-by-modal/search-near-by-modal.page";
import {SearchByUsernamePage} from "../search-by-username/search-by-username.page";
import {PlaydatesRequestedByOther, UserDetails} from "../models/UserDetails";
import {ProfileDetailsService} from "../services/profiledetails/profile-details.service";
import {SESSION_STORAGE, StorageService} from "angular-webstorage-service";

@Component({
  selector: 'app-playdates',
  templateUrl: './playdates.page.html',
  styleUrls: ['./playdates.page.scss'],
})
export class PlaydatesPage implements OnInit {

  constructor(public modalController: ModalController,
              private profileDetailsservice: ProfileDetailsService,
              @Inject(SESSION_STORAGE) private storage: StorageService) { }

  playdatesRequestedByOther: PlaydatesRequestedByOther[];
  allDataFetched = false;

  ngOnInit() {
  }
  async showUpcomingPlayDatesModal() {
    //TODO: load this async after the data is loaded
    await this.delay(300);

    const modal = await this.modalController.create({
      component: UpcomingPlayDatesModalPage,
      componentProps: {
        //TODO: get email from session and send to modal
        'playdatesRequestedByOther': this.playdatesRequestedByOther
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

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  //TODO: start from here, i need to pass requestedPlaydates to display // or display it in the same page here and dont use a modal for upcoming playdates.
  upcomingPlayDatesModal(){
    console.log("upcomingPlayDatesModal");
    this.profileDetailsservice.getUserDetails(this.storage.get("sessionemail")).subscribe((userDetails: UserDetails) => {
      this.playdatesRequestedByOther = userDetails.playdatesRequestedByOthers;
      this.allDataFetched=true;
    });
    this.showUpcomingPlayDatesModal();
  }

}
