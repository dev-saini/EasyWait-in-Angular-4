import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-get-set-preferences',
  templateUrl: './get-set-preferences.component.html',
  styleUrls: ['./get-set-preferences.component.css']
})
export class GetSetPreferencesComponent implements OnInit {

	private url = 'http://52.24.120.4:8001/api/queue/';
	queue_id: string;
	status: string;
	initial_free_slots: string;
	recurring_free_slot: string;

  constructor(private http : HttpClient, private cookieService : CookieService) { }

  ngOnInit() {
  }

  onClickSet() {
  		this.setPreferences();
  	}

  onClickGet() {
  		this.getPreferences();
  	}

  	setPreferences() {

  		let post = {initial_free_slots:	this.initial_free_slots
  			, recurring_free_slot: this.recurring_free_slot};

  		this.http.post(this.url + this.queue_id + '/preferences', post, {

				          headers: new HttpHeaders()
				          .set('Authorization', 'Bearer ' + this.cookieService.get('sign_up_token'))

				        })
  					.subscribe((response: Response) => {

  							console.log(response);
  							this.displaySetPreferences();


				  		}, (error: Response) => {

				        if(error.status == 404)
				          alert('Requested Queue could not be found.');

				      });
  	}

  	getPreferences() {

  		this.http.get(this.url + this.queue_id + '/preferences', {

				          headers: new HttpHeaders()
				          .set('Authorization', 'Bearer ' + this.cookieService.get('sign_up_token'))

				        })
  					.subscribe((response: Response) => {

  							console.log(response);
  							this.displayGetPreferences();

				  		}, (error: Response) => {

				        if(error.status == 404)
				          alert('Requested Queue could not be found.');

				      });

  	}

  	displaySetPreferences() {

  		var label_1 = document.getElementById('set_preference');

  		label_1.innerHTML = 'Preferences Set!'

  	}

  	displayGetPreferences() {

  		var label_1 = document.getElementById('get_preference');

  		label_1.innerHTML = 'Initial Free Slots : ' + this.initial_free_slots 
  		+ ' Recurring Free Slot : ' + this.recurring_free_slot;

  	}
}
