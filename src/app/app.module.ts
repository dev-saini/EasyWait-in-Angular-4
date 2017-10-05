import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';	
import { NgModule } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { RouterModule, Routes } from '@angular/router';

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
import { DisplayQueueStatusComponent } from './display-queue-status/display-queue-status.component';
import { AboutWindowComponent } from './about-window/about-window.component';

const appRoutes : Routes = [
  { 
      path: 'customers', 
      component: QueueStatusComponent
  },
  {
<<<<<<< HEAD
      path: 'vendor',
      component: CreateQueueComponent
=======
      path: 'about',
      component: AboutWindowComponent
  },
  { 
      path: '',
      redirectTo: '/customers',
      pathMatch: 'full'
>>>>>>> 1a6984661d1619365283502bf18228daebcf4874
  }
];

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
    NavigationBarComponent,
    DisplayQueueStatusComponent,
    AboutWindowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
        appRoutes
      )
  ],

  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
