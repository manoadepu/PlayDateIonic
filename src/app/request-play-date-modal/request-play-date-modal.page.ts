import {Component, Inject, NgModule, OnInit} from '@angular/core';
import {ModalController, NavParams} from "@ionic/angular";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UpdatePlayDateInformationService} from "../services/updatePlaydateInformation/update-play-date-information.service";
import {PlayDates} from "../models/PlayDates";
import {SESSION_STORAGE, StorageService} from "angular-webstorage-service";
import {MessageDisplayModalPage} from "../message-display-modal/message-display-modal.page";

@Component({
  selector: 'app-request-play-date-modal',
  templateUrl: './request-play-date-modal.page.html',
  styleUrls: ['./request-play-date-modal.page.scss'],
})
@NgModule({
  imports: [
    FormsModule,    //added here too
    ReactiveFormsModule //added here too
  ],
  declarations: [],
  providers: []
})
export class RequestPlayDateModalPage implements OnInit {
  requestPlaydateReactiveForm: FormGroup;
  playdateInfo: PlayDates= new class implements PlayDates {
    description: string;
    requestedBy: string;
    requestedTo: string;
    status: string;
    when: string;
    where: string;
  };
  constructor(private navParams: NavParams,
              private modalController: ModalController,
              private fb: FormBuilder,
              private updatePlaydateInformationService: UpdatePlayDateInformationService,
              @Inject(SESSION_STORAGE) private storage: StorageService) { }

  ngOnInit() {
    console.log("Email from page to modal"+this.navParams.get('email'));
    this.createForm();
  }

  createForm() {
    this.requestPlaydateReactiveForm = this.fb.group({
      when: [''],
      where: [''],
      desc: ['']
    });
  }
  // requestPlayDate() {
  //   console.log("NAV PARAMS EMAIL: "+this.navParams.get('email'));
  //   console.log("request playdate");
  //   this.displayMessageModal();
  //   this.playdateInfo.when = this.requestPlaydateReactiveForm.get("when").value;
  //   this.playdateInfo.where = this.requestPlaydateReactiveForm.get("where").value;
  //   this.playdateInfo.description = this.requestPlaydateReactiveForm.get("desc").value;
  //   this.playdateInfo.requestedBy = this.storage.get("sessionemail");
  //   this.playdateInfo.requestedTo = this.navParams.get('email');
  //
  //   this.updatePlaydateInformationService.sendRequest(this.playdateInfo);
  // }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  async displayMessageModal() {
    console.log("DISPLAY MESSAGE MODAL ")
    const modal = await this.modalController.create({
      component: MessageDisplayModalPage,
      componentProps: {
        'email': "test"
      }
    });
    return await modal.present();
  }


}
