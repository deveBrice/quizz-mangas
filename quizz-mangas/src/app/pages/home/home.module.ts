import { IonicModule, } from '@ionic/angular';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { OptionComponent } from '../option/option.component'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HomeRoutingModule
  ],
  entryComponents: [
    OptionComponent
  ],
  declarations: [HomeComponent, OptionComponent]
})

export class HomeModule {}