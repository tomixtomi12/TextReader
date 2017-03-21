import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextViewComponent } from './text-view.component';
import { ColorPickerModule } from 'angular2-color-picker';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ColorPickerModule,
    FormsModule
  ],
  declarations: [
    TextViewComponent
  ],
  exports: [
    TextViewComponent
  ]
})
export class TextViewModule { }
