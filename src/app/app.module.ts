import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatInputModule,
  MatListModule,
  MatCardModule,
  MatIconModule
} from '@angular/material';
import { SonnetComponent } from './sonnet/sonnet.component';
import { SonnetStore, StorageService } from '../services';
import { HttpClientModule } from '@angular/common/http';
import { SonnetFilterPipe } from './sonnet-filter.pipe';

@NgModule({
  declarations: [AppComponent, SonnetComponent, SonnetFilterPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [SonnetStore, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
