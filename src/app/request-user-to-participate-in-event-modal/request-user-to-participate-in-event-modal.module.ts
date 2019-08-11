import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RequestUserToParticipateInEventModalPage } from './request-user-to-participate-in-event-modal.page';
import {MatInputModule} from "@angular/material";

const routes: Routes = [
  {
    path: '',
    component: RequestUserToParticipateInEventModalPage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        MatInputModule
    ],
  declarations: [RequestUserToParticipateInEventModalPage]
})
export class RequestUserToParticipateInEventModalPageModule {}
