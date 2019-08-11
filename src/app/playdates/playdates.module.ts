import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";

import { PlaydatesPage } from './playdates.page';

const routes: Routes = [
  {
    path: '',
    component: PlaydatesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PlaydatesPage]
})
export class PlaydatesPageModule {}
