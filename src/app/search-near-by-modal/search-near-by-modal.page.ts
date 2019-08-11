import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from "@ionic/angular";
import {RequestPlayDateModalPage} from "../request-play-date-modal/request-play-date-modal.page";

@Component({
  selector: 'app-search-near-by-modal',
  templateUrl: './search-near-by-modal.page.html',
  styleUrls: ['./search-near-by-modal.page.scss'],
})
export class SearchNearByModalPage implements OnInit {

  constructor(private navParams: NavParams, private modalController: ModalController) { }

  ngOnInit() {
    console.log(this.navParams.get('email'));
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }



}
