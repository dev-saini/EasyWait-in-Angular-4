import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-move-to-next-position',
  templateUrl: './move-to-next-position.component.html',
  styleUrls: ['./move-to-next-position.component.css']
})

export class MoveToNextPositionComponent implements OnInit {

	queue_id: string;
	private url = 'http://52.24.120.4:8001/api/queue/';
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

  		let post = {action: 'movenext'};

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

  		var label = document.getElementById('move_next');

  		label.innerHTML = 'Queue Name: ' + this.name + ';' + ' Queue ID: ' + this.queue_id + ';' +' Updated Position: ' + this.position;
  	}
}
