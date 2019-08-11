import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchNearByModalPage } from './search-near-by-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SearchNearByModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchNearByModalPage]
})
export class SearchNearByModalPageModule {}
