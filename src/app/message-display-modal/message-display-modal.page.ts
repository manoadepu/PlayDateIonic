import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {RequestPlayDateModalPage} from "../request-play-date-modal/request-play-date-modal.page";

@Component({
  selector: 'app-message-display-modal',
  templateUrl: './message-display-modal.page.html',
  styleUrls: ['./message-display-modal.page.scss'],
})
export class MessageDisplayModalPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
