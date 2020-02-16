import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { ContainerModule } from './container/container.module';
import { AppMaterialModule } from './app.material.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppMaterialModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    ContainerModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
