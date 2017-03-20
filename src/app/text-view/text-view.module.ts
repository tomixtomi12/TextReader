import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextViewComponent } from './text-view.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TextViewComponent
  ],
  exports: [
    TextViewComponent
  ]
})
export class TextViewModule { }
