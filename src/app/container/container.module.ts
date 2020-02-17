import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerComponent } from './container.component';
import { ContainerHistoryComponent } from './container-history/container-history.component';
import { ContainerService } from './container.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxDatatableModule
  ],
  declarations: [
    ContainerComponent,
    ContainerHistoryComponent
  ],
  exports: [ContainerComponent],
  providers: [ContainerService]
})
export class ContainerModule { }
