import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MessageDisplayModalPage } from './message-display-modal.page';

const routes: Routes = [
  {
    path: '',
    component: MessageDisplayModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MessageDisplayModalPage]
})
export class MessageDisplayModalPageModule {}
