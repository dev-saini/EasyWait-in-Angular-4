import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-reset-queue-position',
  templateUrl: './reset-queue-position.component.html',
  styleUrls: ['./reset-queue-position.component.css']
})

export class ResetQueuePositionComponent implements OnInit {

  queue_id: string;
	private url = 'http://127.0.0.1:8000/api/queue/';
	position: string;
	name: string;

  	constructor(private http: HttpClient, private cookieService : CookieService) { }

  	ngOnInit() {
  	}

  	onKeyUp() {
  		this.getJSON();
  		}

  	onClick() {
  		this.getJSON();
  	}

  	getJSON() {

  		let post = {action: 'reset'};

  		this.http.post(this.url + this.queue_id, post, {

          headers: new HttpHeaders()
          .set('Authorization', 'Bearer ' + this.cookieService.get('sign_up_token'))

        })
  		.subscribe((response: Response) => {

  			this.position = response['position'];
  			this.name = response['name'];
  			this.displayResult(); 

      }, (error: Response) => {

        if(error.status == 401)
          alert('Please Log-In to continue');
        else
          alert('An unexpected error occured.');

      });
  	}

  	displayResult() {

  		var label = document.getElementById('reset_position');

  		label.innerHTML = 'Queue Name: ' + this.name + ';' + ' Queue ID: ' + this.queue_id + ';' +' Updated Position: ' + this.position;
  	}

}
