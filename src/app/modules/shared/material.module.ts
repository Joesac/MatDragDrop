import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    DragDropModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    DragDropModule
  ]
})
export class MaterialModule { }
