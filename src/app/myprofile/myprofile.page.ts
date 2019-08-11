import {Component, Inject, OnInit} from '@angular/core';
import {UserDetails} from "../models/UserDetails";
import {ProfileDetailsService} from "../services/profiledetails/profile-details.service";
import {HttpClient} from "@angular/common/http";
import {SESSION_STORAGE, StorageService} from "angular-webstorage-service";

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.page.html',
  styleUrls: ['./myprofile.page.scss'],
})
export class MyprofilePage implements OnInit {

  name;
  dob;
  mother;
  father;
  address;
  ethnicity;
  allergies;
  disabilities;
  imageFileBinary;
  email;
  userDetails: UserDetails;
  constructor(private profileDetailService: ProfileDetailsService, private httpClient: HttpClient, @Inject(SESSION_STORAGE) private storage: StorageService) {}

  fileToUpload;

  getProfileDetails() {
    this.profileDetailService.getUserDetails(this.storage.get("sessionemail")).subscribe((userDetails: UserDetails) => {
      this.email = userDetails.email;
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
  postMethod(files: FileList) {
    this.fileToUpload = files.item(0);
    let formData = new FormData();
    formData.append('file', this.fileToUpload, this.fileToUpload.name);

    this.httpClient.post("http://localhost:8080/uploadFile/"+this.email, formData).subscribe((val)=> {
      console.log(val);
    });
    return false;
  }
  ngOnInit() {
    this.getProfileDetails();
    console.log("SESSION EMAIL(from Myprofile.ts):   "+ this.storage.get("sessionemail"));
  }

}
