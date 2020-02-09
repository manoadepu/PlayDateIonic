import {Component, Inject, NgModule} from '@angular/core';
import {ProfileDetailsService} from "../services/profiledetails/profile-details.service";
import {HttpClient} from "@angular/common/http";
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginVerificationService} from "../services/loginVerification/login-verification.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
@NgModule({
  imports: [
  FormsModule,    //added here too
  ReactiveFormsModule //added here too
],
declarations: [],
    providers: []
})
export class HomePage {

  email;
  password;
  reactiveForm: FormGroup;
  constructor(private profileDetailService: ProfileDetailsService,
              private httpClient: HttpClient,
              @Inject(SESSION_STORAGE) private storage: StorageService,
              private fb: FormBuilder,
              private loginVerificationService: LoginVerificationService) {
  }

  // setSession(userEmail:string){
  //   this.storage.set("sessionemail",userEmail);
  //   console.log("EMAIL: "+this.storage.get("email"));
  // }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.reactiveForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  loginVerification() {
    console.log('reactiveForm' , this.reactiveForm.value);
    this.email = this.getEmail();
    console.log(this.email);

    this.password = this.getPassword();
    console.log(this.password);

    console.log("yo"+this.email+", "+ this.password);
    this.loginVerificationService.loginVerification(this.email, this.password);
    // this.setSession(this.email);
    console.log("SESSION EMAIL:  "+this.storage.get("    "));
  }

  getEmail(){
    return this.reactiveForm.get('email').value;
  }

  getPassword(){
    return this.reactiveForm.get('password').value;
  }
}
