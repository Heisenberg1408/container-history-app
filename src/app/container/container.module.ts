import { ControlNumberService } from './../../global/services/control.number.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerComponent } from './container.component';
import { ContainerHistoryComponent } from './container-history/container-history.component';
import { ContainerService } from './container.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ContainerComponent,
    ContainerHistoryComponent
  ],
  exports: [ContainerComponent],
  providers: [
    ContainerService,
    ControlNumberService
  ]
})
export class ContainerModule { }
