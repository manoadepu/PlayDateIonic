import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from "@ionic/angular";
import {RequestPlayDateModalPage} from "../request-play-date-modal/request-play-date-modal.page";
import {UpcomingPlayDatesModalPage} from "../upcoming-play-dates-modal/upcoming-play-dates-modal.page";

@Component({
  selector: 'app-view-upcoming-playdates',
  templateUrl: './view-upcoming-playdates.page.html',
  styleUrls: ['./view-upcoming-playdates.page.scss'],
})
export class ViewUpcomingPlaydatesPage implements OnInit {

  constructor(private navParams: NavParams, private modalController: ModalController) { }

  ngOnInit() {
    console.log("Email from page to modal"+this.navParams.get('email'));
  }

}
