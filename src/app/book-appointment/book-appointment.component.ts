import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {

  	private url = 'http://52.24.120.4:8001/api/queue/';
	queue_id: string;
	status: string;
	reference_name: string;

  	constructor(private http : HttpClient, private cookieService : CookieService) { }

  ngOnInit() {
  }

  onClickBook() {
  		this.getJSON(1);
  	}

  	getJSON(choice: any) {

		  	let post = {action:	'book',reference: this.reference_name};



			 this.http.post(this.url + this.queue_id + '/appointment', post, {

		          headers: new HttpHeaders()
		          .set('Authorization', 'Bearer ' + this.cookieService.get('sign_up_token'))

		        })
				.subscribe((response: Response) => {

					if(response['error'] == false)
						this.status = 'Your appointment has been booked, ' + this.reference_name + '!';
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

  		var label = document.getElementById('booking_status');

  		label.innerHTML = 'Status: ' + this.status;
  	}

}
