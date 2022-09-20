import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { JuegoDeLingoPage } from './juego-de-lingo.page';

const routes: Routes = [
  {
    path: '',
    component: JuegoDeLingoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [JuegoDeLingoPage]
})
export class JuegoDeLingoPageModule {}
