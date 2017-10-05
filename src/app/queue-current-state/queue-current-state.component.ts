import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
import { HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-queue-current-state',
  templateUrl: './queue-current-state.component.html',
  styleUrls: ['./queue-current-state.component.css']
})
export class QueueCurrentStateComponent implements OnInit {

	private url = 'http://ewapi.krishna-seva.net/api/queue/';
	queue_id: string;
	queue_name: any;
	accepting_appointments: string;
	queue_current_position: string;

  	constructor(private http : HttpClient, private cookieService : CookieService) { }

  	ngOnInit() {
  	}

	onKeyUp() {
  		this.getJSON();
  	}  	

  	onClick() {
  		this.getJSON();
  	}

  	getJSON() {

  		this.http.get(this.url + this.queue_id, {

          headers: new HttpHeaders()
          .set('Authorization', 'Bearer ' + this.cookieService.get('sign_up_token'))

        })
  		.subscribe( (response: Response) => {

  			this.queue_id = response['id'];
  			this.queue_name = response['name'];
  			this.queue_current_position = response['position'];
  			this.accepting_appointments = response['accepting_appointments'];
  			this.displayResult();

  		}, (error: Response) => {

        	if(error.status == 401) {
         		alert('Please Login-in to continue.');
          } else {
            alert('An unexpected error occurred.')
          }

  			});

  	}

  	displayResult() {

  		var li = document.getElementById('list');

  		li.innerHTML = 'Queue ID: ' + this.queue_id + ' Queue Name: '+ this.queue_name + ' Accepting Appointments: ' + this.accepting_appointments + ' Current Position: ' + this.queue_current_position;
  	}
}
//this.queue_id + this.queue_name + this.accepting_appointments + this.queue_current_position