import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabAddPageRoutingModule } from './tab-add-routing.module';

import { TabAddPage } from './tab-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabAddPageRoutingModule
  ],
  declarations: [TabAddPage]
})
export class TabAddPageModule {}
