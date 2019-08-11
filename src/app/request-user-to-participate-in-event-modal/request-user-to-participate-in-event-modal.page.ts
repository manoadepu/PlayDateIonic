import {Component, Inject, OnInit} from '@angular/core';
import {SearchByUsernamePage} from "../search-by-username/search-by-username.page";
import {ModalController} from "@ionic/angular";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {map,startWith} from "rxjs/operators";
import {UserDetails} from "../models/UserDetails";
import {HttpClient} from "@angular/common/http";
import {SESSION_STORAGE, StorageService} from "angular-webstorage-service";
import {SendRequestToUserService} from "../services/events/sendRequestToUserForEvent/send-request-to-user.service";
import {EndpointsConstantsService} from "../services/constants/endpoints-constants.service";
import {ShowUserProfileModalPage} from "../show-user-profile-modal/show-user-profile-modal.page";
import {UpdatePlayDateInformationService} from "../services/updatePlaydateInformation/update-play-date-information.service";

@Component({
  selector: 'app-request-user-to-participate-in-event-modal',
  templateUrl: './request-user-to-participate-in-event-modal.page.html',
  styleUrls: ['./request-user-to-participate-in-event-modal.page.scss'],
})
export class RequestUserToParticipateInEventModalPage implements OnInit {

  requestUserToAttendEventReactiveForm:FormGroup;
  title = 'ng-autocomplete';
  userAutoCompleteFormField = new FormControl();
  options: string[];
  users: string[];
  filteredOptions: Observable<string[]>;
  userDetail;
  showNearByUsers=false;
  sendRequestPerUser=true;
  nearByusers: UserDetails[];
  constructor(private modalController: ModalController,
              private fb: FormBuilder,
              private httpClient: HttpClient,
              @Inject(SESSION_STORAGE) private storage: StorageService,
              private sendRequestToUserService: SendRequestToUserService,
              private endpoint: EndpointsConstantsService,
              private updatePlaydateRequestInfo: UpdatePlayDateInformationService) { }

  ngOnInit() {
    this.getUsers();
    this.createForm();

    this.filteredOptions = this.userAutoCompleteFormField.valueChanges
        .pipe(
            startWith(''),
            map(value => this._filter(value))
        );
  }

  private _filter(value: string): string[] {
    if(this.options!=undefined){
      console.log("OPTIONS:"+this.options);
      const filterValue = value.toLowerCase();

      return this.options.filter(option => option.toLowerCase().includes(filterValue));}
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  createForm() {
    this.requestUserToAttendEventReactiveForm = this.fb.group({
      username: ['', Validators.required],
      // where: ['', Validators.required],
      // desc: ['', Validators.required]
    });
  }

  requestUser(){
    console.log(this.requestUserToAttendEventReactiveForm.value);
  }

  getUsers(){
    console.log("In get users.");
    this.httpClient.get(this.endpoint.GET_ALL_USERS_EMAILS).subscribe((res : any[])=>{
      console.log(res);
      this.options = res;
    });
  }


  sendRequest(userDetail){
    console.log("Email entered in the text field:" + userDetail );
    console.log("SessionEmail:"+ this.storage.get("sessionemail"));
    this.sendRequestToUserService.sendRequestToUserForEvent(this.storage.get("sessionemail"),userDetail);
  }

  showNearByUsersinList(){
    this.showNearByUsers=true;
    this.sendRequestPerUser=false;
    console.log("In get near by users");
    this.httpClient.get(this.endpoint.GET_ALL_USERS).subscribe((userDetails : UserDetails[])=>{
      console.log(userDetails.length);
      this.nearByusers = userDetails;
      console.log("email 1:"+userDetails[0].email);
    });
  }

  sendRequestTo(email){
    this.httpClient.get("http://localhost:8080/playdate/request/"+this.storage.get(this.endpoint.SESSION_EMAIL)+"/"+email).subscribe((res:Boolean)=>{
      console.log(res);
    });
    this.updatePlaydateRequestInfo.updatePlayDateRequestInfo(this.endpoint.SESSION_EMAIL,email);
  }

  async viewProfile(email) {
    const modal = await this.modalController.create({
      component: ShowUserProfileModalPage,
      componentProps: {
        //TODO: get email from session and send to modal
        'email': email
      }
    });
    return await modal.present();
  }

}
