import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatInputModule, MatIconModule } from '@angular/material';

import { ContainerComponent } from './container.component';
import { ContainerHistoryComponent } from './container-history/container-history.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule
  ],
  declarations: [
    ContainerComponent,
    ContainerHistoryComponent
  ],
  exports: [ContainerComponent]
})
export class ContainerModule { }
