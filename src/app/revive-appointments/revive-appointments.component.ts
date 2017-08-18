import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-revive-appointments',
  templateUrl: './revive-appointments.component.html',
  styleUrls: ['./revive-appointments.component.css']
})
export class ReviveAppointmentsComponent implements OnInit {

  private url = 'http://52.24.120.4:8001/api/queue/';
	queue_id: string;
	status: string;
	appointments: string;
	name: string;


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

					console.log(response);
					/*this.appointments = response['appointments'];
					this.status = this.appointments[0];
					this.name = this.status['reference'];*/

					this.displayResult();

		  		}, (error: Response) => {

		        if(error.status == 401)
		          alert('Please Log-In to continue');
		      	else if(error.status == 404)
		      		alert('Requested Queue could not be found');
		      	else if(error.status == 403)
		      		alert('Appointments Closed');

		      });

  	}	

  	displayResult() {

  		var label = document.getElementById('revive');

  		label.innerHTML = 'Check console for results';
  	}


}
