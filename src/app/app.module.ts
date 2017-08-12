import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';	
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QueueStatusComponent } from './queue-status/queue-status.component';

@NgModule({
  declarations: [
    AppComponent,
    QueueStatusComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
