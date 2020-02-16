import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerComponent } from './container.component';
import { ContainerHistoryComponent } from './container-history/container-history.component';
import { ContainerService } from './container.service';
import { AppMaterialModule } from '../app.material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    FormsModule
  ],
  declarations: [
    ContainerComponent,
    ContainerHistoryComponent
  ],
  exports: [ContainerComponent],
  providers: [ContainerService]
})
export class ContainerModule { }
