import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserDetails} from "../../models/UserDetails";
import {Router} from "@angular/router";
import {SESSION_STORAGE, StorageService} from "angular-webstorage-service";

@Injectable({
  providedIn: 'root'
})
export class LoginVerificationService {

  getUserDetailUrl = 'http://localhost:8080/playdate/userdetails/';
  passwordFromMongo;
  constructor(private httpClient: HttpClient, public router: Router, @Inject(SESSION_STORAGE) private storage: StorageService,
  ) { }

  loginVerification(email: string, password: string){
    console.log("email entered in the form: "+email);
    console.log("password entered in the form: "+password);

    this.getUserDetails(email).subscribe((userDetails: UserDetails) => {
      console.log("Email in service:"+email);
      console.log("Email in userDEtails:"+userDetails);

      if(password===userDetails.password){
        console.log('credentials match');
        this.setSession(email);
        this.router.navigate(['/profile']);
      }
      else {
        console.log('credentials did not match');
      }
    });
  }

  getUserDetails(email: string){
    return this.httpClient.get(this.getUserDetailUrl+email);
  }
  setSession(userEmail:string){
    this.storage.set("sessionemail",userEmail);
    console.log("EMAIL: "+this.storage.get("email"));
  }
}
