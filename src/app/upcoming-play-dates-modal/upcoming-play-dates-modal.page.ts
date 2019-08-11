import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from "@ionic/angular";
import {PlaydatesRequestedByMe, PlaydatesRequestedByOther, UserDetails} from "../models/UserDetails";
import {ProfileDetailsService} from "../services/profiledetails/profile-details.service";
import {DomSanitizer} from "@angular/platform-browser";
import {SearchNearByModalPage} from "../search-near-by-modal/search-near-by-modal.page";
import {ShowUserProfileModalPage} from "../show-user-profile-modal/show-user-profile-modal.page";

@Component({
  selector: 'app-upcoming-play-dates-modal',
  templateUrl: './upcoming-play-dates-modal.page.html',
  styleUrls: ['./upcoming-play-dates-modal.page.scss'],
})
export class UpcomingPlayDatesModalPage implements OnInit {
  playdatesRequestedByOther: PlaydatesRequestedByOther[];

  constructor(private navParams: NavParams,
              private modalController: ModalController,
              private profileDetailsservice: ProfileDetailsService,
              public _DomSanitizationService: DomSanitizer) { }
  requestedPlayDates: UserDetails[];
  playdatesRequestedByMe: PlaydatesRequestedByMe[];
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  async showUserProfileModal(email) {
    const modal = await this.modalController.create({
      component: ShowUserProfileModalPage,
      componentProps: {
        //TODO: get email from session and send to modal
        'email': email
      }
    });
    return await modal.present();
  }

  ngOnInit() {
    console.log("BASE64 image url: "+this.playdatesRequestedByOther[0].base64Image)
    this.playdatesRequestedByOther = this.navParams.get('playdatesRequestedByOther');
  }

}
