import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContainerComponent } from './container.component';
import { ContainerHistoryComponent } from './container-history/container-history.component';
import { ContainerService } from './container.service';
import { ControlNumberModule } from '../../global/modules/control.number.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ControlNumberModule
  ],
  declarations: [
    ContainerComponent,
    ContainerHistoryComponent
  ],
  exports: [ContainerComponent],
  providers: [
    ContainerService
  ]
})
export class ContainerModule { }
