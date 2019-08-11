import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UpcomingPlayDatesModalPage } from './upcoming-play-dates-modal.page';

const routes: Routes = [
  {
    path: '',
    component: UpcomingPlayDatesModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UpcomingPlayDatesModalPage]
})
export class UpcomingPlayDatesModalPageModule {}
