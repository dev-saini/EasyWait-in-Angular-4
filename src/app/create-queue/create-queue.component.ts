import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
import { HttpHeaders } from '@angular/common/http';

import * as myGlobals from '../globals';

@Component({
  selector: 'app-create-queue',
  templateUrl: './create-queue.component.html',
  styleUrls: ['./create-queue.component.css']
})
export class CreateQueueComponent implements OnInit {

	private url = 'http://ewapi.krishna-seva.net/api/queue';
  
  queue_name: string;
  queue_id: string;
  queuelist: string;

  	constructor(private http : HttpClient, private cookieService : CookieService) { }

  	ngOnInit() {

      //this.fetchQueueList();

  	}

    fetchQueueList() {

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

  	onKeyUp() {
  		this.getJSON();
  	}

  	onClick() {
  		this.getJSON();
  	}

  	getJSON() {

        let post = {name: this.queue_name};

        this.http.post(this.url, post, {

          headers: new HttpHeaders()
          .set('Authorization', 'Bearer ' + this.cookieService.get('sign_up_token'))

        })
        .subscribe(
          (response: Response) => {

            if(response['error'] == false) {

                this.queue_id = response['id'];
                this.queue_name = response['name'];

                this.fetchQueueList();

          } else {

            console.log(response);
            var temp = response['details'];
            this.queue_id = temp['message'];

            alert(this.queue_id);

          }

          console.log(response);

      }, (error: Response) => {

        if(error.status == 401)
          alert('Please Login-in to continue.');
        else
          alert('An unexpected error occured.');

      });
  	}

    displayName() {

      // var label = document.getElementById('queue_id&name');

      // label.innerHTML = 'Queue ID: ' + this.queue_id + '.' + ' Queue Name: ' + this.queue_name;
    }
}