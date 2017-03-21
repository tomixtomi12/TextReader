import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { TextInputComponent } from './text-input/text-input.component';
import { TextViewComponent } from './text-view/text-view.component';
import { TextInputModule } from './text-input/text-input.module';
import { TextViewModule } from './text-view/text-view.module';

const ROUTES: Route[] = [
  { path: '', redirectTo: 'input', pathMatch: 'full' },
  { path: 'input', component: TextInputComponent },
  { path: 'read', redirectTo: 'read/1', pathMatch: 'full' },
  { path: 'read/:page', component: TextViewComponent },
  { path: '**', redirectTo: 'input', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    TextInputModule,
    TextViewModule,
    RouterModule.forRoot(ROUTES, {useHash: true})
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
