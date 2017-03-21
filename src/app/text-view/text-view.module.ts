import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextViewComponent } from './text-view.component';
import { ColorPickerModule } from 'angular2-color-picker';
import { FormsModule } from '@angular/forms';
import { YoutubePlayerModule } from 'ng2-youtube-player';

@NgModule({
  imports: [
    CommonModule,
    ColorPickerModule,
    FormsModule,
    YoutubePlayerModule
  ],
  declarations: [
    TextViewComponent
  ],
  exports: [
    TextViewComponent
  ]
})
export class TextViewModule { }
