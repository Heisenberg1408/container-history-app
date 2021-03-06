import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContainerComponent } from './container.component';
import { ContainerHistoryComponent } from './container-history/container-history.component';
import { ContainerService } from './container.service';
import { ControlNumberModule } from '../../global/modules/control.number.module';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { NgxMaskModule } from 'ngx-mask';
import { UpperCaseDirective } from '../../global/directives/uppercase.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    ToastModule.forRoot(),
    ControlNumberModule
  ],
  declarations: [
    ContainerComponent,
    ContainerHistoryComponent,
    UpperCaseDirective
  ],
  exports: [ContainerComponent],
  providers: [
    ContainerService
  ]
})
export class ContainerModule { }
