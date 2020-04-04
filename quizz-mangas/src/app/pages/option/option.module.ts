import { IonicModule } from '@ionic/angular';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OptionComponent } from './option.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ],
  
  declarations: [OptionComponent],
  exports: [OptionComponent],
  entryComponents: [OptionComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class OptionModule {}