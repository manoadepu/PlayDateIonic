import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserDetails} from "../../models/UserDetails";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginVerificationService {

  getUserDetailUrl = 'http://localhost:8080/playdate/userdetails/';
  passwordFromMongo;
  constructor(private httpClient: HttpClient, public router: Router) { }

  loginVerification(email: string, password: string){
    console.log("email entered in the form: "+email);
    console.log("password entered in the form: "+password);

    this.getUserDetails(email).subscribe((userDetails: UserDetails) => {
      console.log("Email in service:"+email);
      if(password===userDetails.password){
        console.log('credentials match');
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
}
