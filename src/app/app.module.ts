import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {HttpClientModule} from '@angular/common/http';
import { StorageServiceModule} from 'angular-webstorage-service';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RequestPlayDateModalPage} from "./request-play-date-modal/request-play-date-modal.page";
import {ViewUpcomingPlaydatesPage} from "./view-upcoming-playdates/view-upcoming-playdates.page";
import {UpcomingPlayDatesModalPage} from "./upcoming-play-dates-modal/upcoming-play-dates-modal.page";
import {SearchNearByModalPage} from "./search-near-by-modal/search-near-by-modal.page";
import {MessageDisplayModalPage} from "./message-display-modal/message-display-modal.page";
import {SearchByUsernamePage} from "./search-by-username/search-by-username.page";
import {ShowUserProfileModalPage} from "./show-user-profile-modal/show-user-profile-modal.page";
import {RequestUserToParticipateInEventModalPage} from "./request-user-to-participate-in-event-modal/request-user-to-participate-in-event-modal.page";
import {MatAutocompleteModule, MatFormFieldModule, MatInputModule} from "@angular/material";

@NgModule({
  declarations: [
      AppComponent,
    RequestPlayDateModalPage,
    UpcomingPlayDatesModalPage,
    SearchNearByModalPage,
    MessageDisplayModalPage,
    SearchByUsernamePage,
    ShowUserProfileModalPage,
    RequestUserToParticipateInEventModalPage
  ],
  entryComponents: [
      RequestPlayDateModalPage,
      UpcomingPlayDatesModalPage,
      SearchNearByModalPage,
      MessageDisplayModalPage,
      SearchByUsernamePage,
      ShowUserProfileModalPage,
      RequestUserToParticipateInEventModalPage
  ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        HttpClientModule,
        StorageServiceModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatAutocompleteModule,
        MatInputModule
    ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
