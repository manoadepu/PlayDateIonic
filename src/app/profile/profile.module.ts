import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import {TabsRouterModule} from './tabs.router.module';
import { ProfilePage } from './profile.page';
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TabsRouterModule
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
