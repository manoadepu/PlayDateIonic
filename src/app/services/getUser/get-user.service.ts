import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GetUserService {
  getUserDetailUrl = 'http://localhost:8080/playdate/userdetails/';
  constructor(private httpClient: HttpClient) { }

  getUser(email: string){
    return this.httpClient.get(this.getUserDetailUrl+email)
  }
}
