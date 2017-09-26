import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-list-of-queues',
  templateUrl: './list-of-queues.component.html',
  styleUrls: ['./list-of-queues.component.css']
})

export class ListOfQueuesComponent implements OnInit {

	private url = 'http://127.0.0.1:8000/api/queue';
	queuelist: string;

  	constructor(private http : HttpClient, private cookieService : CookieService) { }

  	ngOnInit() {
  	}

  	onClick() {
  		this.getJSON();
  	}

  	getJSON() {

  		this.http.get(this.url, {

          headers: new HttpHeaders()
          .set('Authorization', 'Bearer ' + this.cookieService.get('sign_up_token'))

        })
  		.subscribe( (response: Response) => {

  			if(response['error'] == false) {

          console.log(response);
  				this.queuelist = response['queues'];
  				
  			} else {

  				console.log(response['message']);
          alert(response['message']);

  			}


  		}, (error: Response) => {

        	if(error.status == 401) {
         		alert('Please Login-in to continue.');
          } else if(error.status == 204) {
          		alert('You have created no queues.');
          } else {
            alert('An unexpected error occurred.')
          }

  			})	
  	}

}
