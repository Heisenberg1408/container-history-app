import { NgModule } from '@angular/core';
import { MatToolbarModule, MatInputModule, MatIconModule, MatButtonModule, MatTableModule, MatFormFieldModule } from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule
  ],
  exports: [
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule
  ]
})
export class AppMaterialModule {

}
