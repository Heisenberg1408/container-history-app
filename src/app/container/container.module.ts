import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContainerComponent } from './container.component';
import { ContainerHistoryComponent } from './container-history/container-history.component';
import { ContainerService } from './container.service';
import { ControlNumberModule } from '../../global/modules/control.number.module';
import { provideEnvironmentNgxMask } from 'ngx-mask';
import { UpperCaseDirective } from '../../global/directives/uppercase.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ControlNumberModule
  ],
  declarations: [
    ContainerComponent,
    ContainerHistoryComponent,
    UpperCaseDirective
  ],
  exports: [ContainerComponent],
  providers: [
    ContainerService,
    provideEnvironmentNgxMask()
  ]
})
export class ContainerModule { }
