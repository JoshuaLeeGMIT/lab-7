import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConnachtPageRoutingModule } from './connacht-routing.module';

import { ConnachtPage } from './connacht.page';
import { ConnachtCountiesPageModule } from '../connacht-counties/connacht-counties.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnachtPageRoutingModule,
    ConnachtCountiesPageModule
  ],
  declarations: [ConnachtPage]
})
export class ConnachtPageModule {}
