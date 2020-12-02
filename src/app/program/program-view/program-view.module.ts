import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgramViewPageRoutingModule } from './program-view-routing.module';

import { ProgramViewPage } from './program-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgramViewPageRoutingModule
  ],
  declarations: [ProgramViewPage]
})
export class ProgramViewPageModule {}
