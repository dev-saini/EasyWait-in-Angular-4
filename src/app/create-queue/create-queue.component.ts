import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-create-queue',
  templateUrl: './create-queue.component.html',
  styleUrls: ['./create-queue.component.css']
})
export class CreateQueueComponent implements OnInit {

	queue_name: string;
	private url = 'http://127.0.0.1:8000/api/queue';
  queue_id: string;

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

                this.displayName();

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

      var label = document.getElementById('queue_id&name');

      label.innerHTML = 'Queue ID: ' + this.queue_id + '.' + ' Queue Name: ' + this.queue_name;
    }
}

