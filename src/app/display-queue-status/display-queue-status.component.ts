import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-display-queue-status',
    templateUrl: './display-queue-status.component.html',
    styleUrls: ['./display-queue-status.component.css']
})

export class DisplayQueueStatusComponent implements OnInit {

    @Input() queue_position: string;
    @Input() queue_id: string;
    @Input() accepting_appointments: boolean;
    @Input() appointments_flag: any;
    @Input() appointments: any;

    constructor() {
    }

    ngOnInit() {
    }

    onClick() {
        alert('Coming Soon!');
    }

}


// import { Component, OnInit, Input } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Response } from '@angular/http';
// import { CookieService } from 'ngx-cookie-service';
//
// import { QueueStatusComponent } from '../queue-status/queue-status.component';
// import * as myGlobals from '../globals';
//
// @Component({
//   selector: 'app-display-queue-status',
//   templateUrl: './display-queue-status.component.html',
//   styleUrls: ['./display-queue-status.component.css']
// })
//
// export class DisplayQueueStatusComponent implements OnInit {
//
//     @Input() queue_position: string;
//     @Input() queue_id: string;
//     @Input() accepting_appointments: boolean;
//   @Input() appointments_flag: any;
//   @Input() appointments: any;
//
//   reference_name: string;
//   private url = myGlobals.url + 'api/queue/';
//   status: string;
//
//   constructor(private http : HttpClient, private cookieService : CookieService) {
//
//    }
//
//   ngOnInit() {
//
//   }
//
//   onClick() {
//
//     this.reference_name = prompt('In whose name would you like to book an appointment?');
//
//     if(this.reference_name == null || this.reference_name == "") {
//
//         alert("We're so sorry. But bookings here can't be made without a reference name!");
//
//     } else {
//
//         this.bookAppointment();
//
//         [>let object = new QueueStatusComponent(this.http, this.cookieService);
//
//         object.getAppointments();
//
//         this.appointments_flag = 1;
//         this.appointments_flag = 0; */
//
//
//         //alert('Your appointment has been booked for the reference name ' + this.reference_name)
//
//     }
//
//
//   }
//
//   bookAppointment() {
//
//     let post = {action:  'book',reference: this.reference_name};
//
//     this.http.post(this.url + this.queue_id + '/appointment', post, {
//
//     headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.cookieService.get('sign_up_token'))
//
//     }) .subscribe((response: Response) => {
//
//     if(response['error'] == false)
//
//         this.status = 'Your appointment has been booked, ' + this.reference_name + '!';
//
//     else
//
//         this.status = 'Bookings Closed for this queue';
//
//     console.log(this.status);
//
//     alert(this.status);
//
//     }, (error: Response) => {
//
//     if(error.status == 401)
//
//         alert('Please Log-In to continue');
//
//     else if(error.status == 404)
//
//         alert('Requested Queue could not be found');
//
//     else if(error.status == 403)
//
//         alert('Appointments CLosed');
//
//     });
//
/*   } */
//
/* } */
