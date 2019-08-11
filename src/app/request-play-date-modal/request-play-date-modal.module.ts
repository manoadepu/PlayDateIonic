import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RequestPlayDateModalPage } from './request-play-date-modal.page';

const routes: Routes = [
  {
    path: '',
    component: RequestPlayDateModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RequestPlayDateModalPage]
})
export class RequestPlayDateModalPageModule {}
