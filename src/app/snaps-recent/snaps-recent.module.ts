import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SnapsRecentPage } from './snaps-recent.page';

const routes: Routes = [
  {
    path: '',
    component: SnapsRecentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SnapsRecentPage]
})
export class SnapsRecentPageModule {}
