import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';	
import { NgModule } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { QueueStatusComponent } from './queue-status/queue-status.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CreateQueueComponent } from './create-queue/create-queue.component';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    QueueStatusComponent,
    SignUpComponent,
    CreateQueueComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],

  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
