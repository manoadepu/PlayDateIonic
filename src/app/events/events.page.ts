import {Component, Inject, NgModule, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {SESSION_STORAGE, StorageService} from "angular-webstorage-service";
import {ModalController} from "@ionic/angular";
import {RequestUserToParticipateInEventModalPage} from "../request-user-to-participate-in-event-modal/request-user-to-participate-in-event-modal.page";

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

  constructor(private httpClient: HttpClient,
              @Inject(SESSION_STORAGE) private storage: StorageService,
              private fb: FormBuilder,
              public modalController: ModalController) { }

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
      console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.eventDetailsReactiveForm.value))
    }

    console.log('REACTIVE FORM: ', this.eventDetailsReactiveForm.value);
    this.requestUserToParticipateInEventModal();
  }
  async requestUserToParticipateInEventModal() {
    //TODO: this should wait till the upcoming data is loaded in future
    const modal = await this.modalController.create({
      component: RequestUserToParticipateInEventModalPage,
      componentProps: {
        'email': "testing email value in search near by modal page sent from ts page."
      }
    });
    return await modal.present();
  }

  // convenience getter for easy access to form fields
  get getFormControl() { return this.eventDetailsReactiveForm.controls; }

}
