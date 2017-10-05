import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-appointment-administration',
  templateUrl: './appointment-administration.component.html',
  styleUrls: ['./appointment-administration.component.css']
})

export class AppointmentAdministrationComponent implements OnInit {

	private url = 'http://ewapi.krishna-seva.net/api/queue/';
	queue_id: string;
	status: string;

  	constructor(private http : HttpClient, private cookieService : CookieService) { }

  ngOnInit() {
  }

  onClickOpen() {
  		this.getJSON(1);
  	}

  onClickClose() {
  		this.getJSON(2);
  	}
  	
  onClickReset() {
  		this.getJSON(3);
  	}	

  	getJSON(choice: any) {

  		let action_1 = {action:	'open'};
  		let action_2 = {action: 'close'};
  		let action_3 = {action: 'close'};

  		switch(choice) {

  			case 1: this.http.post(this.url + this.queue_id + '/appointment', action_1, {

				          headers: new HttpHeaders()
				          .set('Authorization', 'Bearer ' + this.cookieService.get('sign_up_token'))

				        })
  					.subscribe((response: Response) => {

				        	if(response['accepting_appointments'] == 1)
				        		this.status = 'Appointments Open';

				        	this.displayResult();

				  		}, (error: Response) => {

				        if(error.status == 404)
				          alert('Requested Queue could not be found.');

				      });
  						break;

  			case 2: this.http.post(this.url + this.queue_id + '/appointment', action_2, {

				          headers: new HttpHeaders()
				          .set('Authorization', 'Bearer ' + this.cookieService.get('sign_up_token'))

				        })
  					.subscribe((response: Response) => {

				        	if(response['accepting_appointments'] == 0)
				        		this.status = 'Appointments Closed';

				        	this.displayResult();

				  		}, (error: Response) => {

				        if(error.status == 404)
				          alert('Requested Queue could not be found.');
				        

				      });
  						break;
  			case 3: this.http.post(this.url + this.queue_id + '/appointment', action_3, {

				          headers: new HttpHeaders()
				          .set('Authorization', 'Bearer ' + this.cookieService.get('sign_up_token'))

				        })
  					.subscribe((response: Response) => {

				        	console.log(response);

				  		}, (error: Response) => {

				        if(error.status == 401)
				          alert('The user already exists.');
				        else
				          alert('An unexpected error occured.');

				      });
  						break;

  		}

  	}	

  	displayResult() {

  		var label = document.getElementById('appointment_status');

  		label.innerHTML = 'Status: ' + this.status;
  	}
}
