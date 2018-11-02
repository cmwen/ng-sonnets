import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatInputModule,
  MatListModule,
  MatCardModule
} from '@angular/material';
import { SonnetComponent } from './sonnet/sonnet.component';
import { SonnetService, StorageService } from '../services';

@NgModule({
  declarations: [AppComponent, SonnetComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatCardModule
  ],
  providers: [SonnetService, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
