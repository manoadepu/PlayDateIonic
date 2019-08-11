import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShowUserProfileModalPage } from './show-user-profile-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ShowUserProfileModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShowUserProfileModalPage]
})
export class ShowUserProfileModalPageModule {}
