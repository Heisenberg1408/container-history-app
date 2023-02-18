import { NgModule, ModuleWithProviders } from '@angular/core';
import { ControlNumberService } from '../services/control.number.service';

@NgModule({
  providers: [ControlNumberService]
})
export class ControlNumberModule {
  public static forRoot(): ModuleWithProviders<ControlNumberModule> {
    return {
      ngModule: ControlNumberModule,
      providers: [ControlNumberService]
    };
  }
}
