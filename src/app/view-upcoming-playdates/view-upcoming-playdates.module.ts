import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ViewUpcomingPlaydatesPage } from './view-upcoming-playdates.page';

const routes: Routes = [
  {
    path: '',
    component: ViewUpcomingPlaydatesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ViewUpcomingPlaydatesPage]
})
export class ViewUpcomingPlaydatesPageModule {}
