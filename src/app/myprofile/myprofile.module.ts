import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MyprofilePage } from './myprofile.page';
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: '',
    component: MyprofilePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MyprofilePage]
})
export class MyprofilePageModule {
}
