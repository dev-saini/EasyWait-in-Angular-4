import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';	
import { NgModule } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { QueueStatusComponent } from './queue-status/queue-status.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CreateQueueComponent } from './create-queue/create-queue.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ListOfQueuesComponent } from './list-of-queues/list-of-queues.component';
import { MoveToNextPositionComponent } from './move-to-next-position/move-to-next-position.component';
import { ResetQueuePositionComponent } from './reset-queue-position/reset-queue-position.component';
import { QueueCurrentStateComponent } from './queue-current-state/queue-current-state.component';
import { AppointmentAdministrationComponent } from './appointment-administration/appointment-administration.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { ReviveAppointmentsComponent } from './revive-appointments/revive-appointments.component';
import { CancelAppointmentComponent } from './cancel-appointment/cancel-appointment.component';
import { GetSetPreferencesComponent } from './get-set-preferences/get-set-preferences.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    QueueStatusComponent,
    SignUpComponent,
    CreateQueueComponent,
    SignInComponent,
    ListOfQueuesComponent,
    MoveToNextPositionComponent,
    ResetQueuePositionComponent,
    QueueCurrentStateComponent,
    AppointmentAdministrationComponent,
    BookAppointmentComponent,
    ReviveAppointmentsComponent,
    CancelAppointmentComponent,
    GetSetPreferencesComponent,
    NavigationBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
        { 
          path: 'customers', 
          component: QueueStatusComponent
        },
        { 
          path: '',
          redirectTo: '/customers',
          pathMatch: 'full'
        }
      ])
  ],

  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
