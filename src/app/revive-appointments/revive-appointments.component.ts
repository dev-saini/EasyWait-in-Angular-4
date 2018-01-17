import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';

import * as myGlobals from '../globals';

@Component({
  selector: 'app-revive-appointments',
  templateUrl: './revive-appointments.component.html',
  styleUrls: ['./revive-appointments.component.css']
})

export class ReviveAppointmentsComponent implements OnInit {

  private url = myGlobals.url + 'api/queue/';
	queue_id: string;
	status: string;
	appointments: string;
	name: string;

	@Input() appointments_flag: any;
	@Input() load_component: true;
	@Input() logged_in: any;


  	constructor(private http : HttpClient, private cookieService : CookieService) { }

  ngOnInit() {
  }

  onClick() {
  		this.getJSON();
  	}

  	getJSON() {

			 this.http.get(this.url + this.queue_id + '/appointment', {

		          headers: new HttpHeaders()
		          .set('Authorization', 'Bearer ' + this.cookieService.get('sign_up_token'))

		        })
				.subscribe((response: Response) => {

					if(response == null) {
              			this.appointments_flag = 1;
          			} else {
            			this.appointments_flag = 0;
          }

     			this.load_component = true;	
					console.log(this.queue_id);
					
					this.appointments = response['appointments'];

					// this.status = this.appointments[0];
					// this.name = this.status['reference'];

					//this.displayResult();

		  		}, (error: Response) => {

		       console.log(error.status);

            if(error.status == 401) {

              alert('Please Log-In to continue');

              this.logged_in = false;

            }

            else if(error.status == 404)

              alert('Requested Queue could not be found');

            else if(error.status == 403)

              alert('Appointments Closed');

            else

              this.logged_in = true;

		      });

  	}	

  	displayResult() {

  		var label = document.getElementById('revive');

  		label.innerHTML = 'Check console for results';
  	}


}
