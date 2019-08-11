import {Component, Inject, OnInit} from '@angular/core';
import {UserDetails} from "../models/UserDetails";
import {ProfileDetailsService} from "../services/profiledetails/profile-details.service";
import {HttpClient} from "@angular/common/http";
import {SESSION_STORAGE, StorageService} from "angular-webstorage-service";
import {ModalController, NavParams} from "@ionic/angular";

@Component({
  selector: 'app-show-user-profile-modal',
  templateUrl: './show-user-profile-modal.page.html',
  styleUrls: ['./show-user-profile-modal.page.scss'],
})
export class ShowUserProfileModalPage implements OnInit {
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

  constructor(private modalController: ModalController,
              private navParams: NavParams,
              private profileDetailService: ProfileDetailsService,
              private httpClient: HttpClient,
              @Inject(SESSION_STORAGE) private storage: StorageService) {}
  getProfileDetails() {
    this.profileDetailService.getUserDetails(this.navParams.get("email")).subscribe((userDetails: UserDetails) => {
      this.userDetails = userDetails;
      this.name = userDetails.username;
      this.dob = userDetails.dob;
      this.mother = userDetails.parentsDetails.motherName;
      this.father = userDetails.parentsDetails.fatherName;
      this.address = userDetails.address;
      this.allergies = userDetails.allergies;
      this.disabilities = userDetails.disabilities;
      this.imageFileBinary = userDetails.imageFileBinary
    });
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  ngOnInit() {
    console.log(this.navParams.get("email"));
    this.getProfileDetails();
  }

}
