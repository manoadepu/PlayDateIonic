import {Component, Inject, NgModule, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {GetUserService} from "../services/getUser/get-user.service";
import {UserDetails} from "../models/UserDetails";
import {ModalController, NavParams} from "@ionic/angular";
import {RequestPlayDateModalPage} from "../request-play-date-modal/request-play-date-modal.page";
import {UpdatePlayDateInformationService} from "../services/updatePlaydateInformation/update-play-date-information.service";
import {SESSION_STORAGE, StorageService} from "angular-webstorage-service";
import {PlayDates} from "../models/PlayDates";

@Component({
  selector: 'app-search-by-username',
  templateUrl: './search-by-username.page.html',
  styleUrls: ['./search-by-username.page.scss'],
})
@NgModule({
  imports: [
    FormsModule,    //added here too
    ReactiveFormsModule //added here too
  ],
  declarations: [],
  providers: []
})
export class SearchByUsernamePage implements OnInit {
  userReactiveForm: FormGroup;
  requestPlaydateReactiveForm: FormGroup;
  requestedTo;
  email;
  name;
  dob;
  mother;
  father;
  address;
  ethnicity;
  allergies;
  disabilities;
  imageFileBinary;
  userDetails: UserDetails;
  submitted = false;

  playdateInfo: PlayDates= new class implements PlayDates {
    description: string;
    requestedBy: string;
    requestedTo: string;
    status: string;
    when: string;
    where: string;
  };

  constructor(private fb: FormBuilder,
              private getUserService: GetUserService,
              public modalController: ModalController,
              private updatePlaydateInformationService: UpdatePlayDateInformationService,
              @Inject(SESSION_STORAGE) private storage: StorageService,
              private navParams: NavParams) { }
  displayform = true;
  displayUserDetails = false;
  displayRequestPlayDateForm = false;
  displayMessageInfo = false;

  ngOnInit() {
    this.createForm();
    this.createRequestPlayDateForm();
  }

  createForm() {
    this.userReactiveForm = this.fb.group({
      email: ['']
    });
  }
  createRequestPlayDateForm() {
    this.requestPlaydateReactiveForm = this.fb.group({
      when: ['',Validators.required],
      where: ['',Validators.required],
      desc: ['',Validators.required]
    });
  }
  getUserWithProvidedUsername(){
    this.requestedTo = this.userReactiveForm.get('email').value;
    this.displayform = false;
    this.displayUserDetails = true;
    console.log('reactiveForm' , this.userReactiveForm.value);
    this.email = this.userReactiveForm.get('email').value;
    this.getUserService.getUser(this.email).subscribe((userDetails: UserDetails)=>{
      console.log("FATHER NAME: "+userDetails.parentsDetails.fatherName);
      this.userDetails = userDetails;
      this.name = userDetails.username;
      this.dob = userDetails.dob;
      this.mother = userDetails.parentsDetails.motherName;
      this.father = userDetails.parentsDetails.fatherName;
      this.address = userDetails.address;
      this.allergies = userDetails.allergies;
      this.disabilities = userDetails.disabilities;
      this.imageFileBinary = userDetails.imageFileBinary
    })
  }

  displayUserData(){
    this.displayRequestPlayDateForm = true;
    this.displayUserDetails = false;
    console.log("request playdate");
  }

  requestPlayDate(){
    this.displayRequestPlayDateForm = true;
    this.displayUserDetails = false;
  }

  sendPlayDateRequest(){
    this.submitted=true;
    //stop here if the form is invalid

    if (this.requestPlaydateReactiveForm.invalid) {
      return;
    }
    else {
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.requestPlaydateReactiveForm.value))
    }
    this.playdateInfo.when = this.requestPlaydateReactiveForm.get("when").value;
    this.playdateInfo.where = this.requestPlaydateReactiveForm.get("where").value;
    this.playdateInfo.description = this.requestPlaydateReactiveForm.get("desc").value;
    this.playdateInfo.requestedBy = this.storage.get("sessionemail");
    this.playdateInfo.requestedTo = this.requestedTo;

    this.updatePlaydateInformationService.updatePlayDateInfo(this.playdateInfo);
    this.displayRequestPlayDateForm = false;
    this.displayMessageInfo = true;
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.requestPlaydateReactiveForm.controls; }
}
