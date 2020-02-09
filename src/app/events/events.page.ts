import {Component, Inject, NgModule, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {SESSION_STORAGE, StorageService} from "angular-webstorage-service";
import {ModalController} from "@ionic/angular";
import {RequestUserToParticipateInEventModalPage} from "../request-user-to-participate-in-event-modal/request-user-to-participate-in-event-modal.page";
import {SendRequestToUserService} from "../services/events/sendRequestToUserForEvent/send-request-to-user.service";
import {EndpointsConstantsService} from "../services/constants/endpoints-constants.service";
import {Event} from "../models/Event";
import {UserDetails} from "../models/UserDetails";

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
@NgModule({
  imports: [
    FormsModule,    //added here too
    ReactiveFormsModule //added here too
  ],
  declarations: [],
  providers: []
})
export class EventsPage implements OnInit {
  eventDetailsReactiveForm: FormGroup;
  submitted = false;
  event:Event={};
  eventGuid;

  constructor(private httpClient: HttpClient,
              @Inject(SESSION_STORAGE) private storage: StorageService,
              private fb: FormBuilder,
              public modalController: ModalController,
              private createEventService: SendRequestToUserService,
              private constants: EndpointsConstantsService) { }

  createForm() {
    this.eventDetailsReactiveForm = this.fb.group({
      when: ['', Validators.required],
      where: ['', Validators.required],
      desc: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.createForm();
  }

  createEvent(){
    this.submitted=true;
    if (this.eventDetailsReactiveForm.invalid) {
      return;
    }
    else {
      this.event.when = this.eventDetailsReactiveForm.get("when").value;
      this.event.where = this.eventDetailsReactiveForm.get("where").value;
      this.event.description = this.eventDetailsReactiveForm.get("desc").value;
      this.createEventService.createNewEvent(this.storage.get(this.constants.SESSION_EMAIL),this.event).subscribe((eventGuid)=>{
        if (eventGuid!=undefined) {
          this.eventGuid = eventGuid;
        this.requestUserToParticipateInEventModal();
        }
      });
    }

  }
  async requestUserToParticipateInEventModal() {
    //TODO: this should wait till the upcoming data is loaded in future

    const modal = await this.modalController.create({

      component: RequestUserToParticipateInEventModalPage,
      componentProps: {
        'eventGuid': this.eventGuid
      }
    });
    console.log("before modal open: "+this.eventGuid);
    return await modal.present();
  }

  // convenience getter for easy access to form fields
  get getFormControl() { return this.eventDetailsReactiveForm.controls; }

}
