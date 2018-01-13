import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';

import * as myGlobals from '../globals';

@Component({
  selector: 'app-cancel-appointment',
  templateUrl: './cancel-appointment.component.html',
  styleUrls: ['./cancel-appointment.component.css']
})

export class CancelAppointmentComponent implements OnInit {

  	private url = myGlobals.url + 'api/queue/';
	queue_id: string;
	status: string;
	position: string;

  	constructor(private http : HttpClient, private cookieService : CookieService) { }

  	ngOnInit() {
  	
  	}

  	onClickBook() {
  		
  		this.getJSON(1);
  	
  	}

  	getJSON(choice: any) {

		let post = {action:	'cancel',position: this.position};



		this.http.post(this.url + this.queue_id + '/appointment', post, {

			headers: new HttpHeaders() .set('Authorization', 'Bearer ' + this.cookieService.get('sign_up_token'))

		}) .subscribe((response: Response) => {

		if(response['error'] == false)
			
			this.status = 'Your appointment has been cancelled for the position ' + this.position + '.';
		
		else
			
			this.status = 'Bookings Closed for this queue';

		this.displayResult();
		        	
		}, (error: Response) => {

		if(error.status == 401)
		    
		    alert('Please Log-In to continue');
		
		else if(error.status == 404)
		    
		    alert('Requested Queue could not be found');
		
		else if(error.status == 403)
			
			alert('Appointments CLosed');

		});

  	}	

  	displayResult() {

  		var label = document.getElementById('cancel_status');

  		label.innerHTML = 'Status: ' + this.status;
  	}


}
