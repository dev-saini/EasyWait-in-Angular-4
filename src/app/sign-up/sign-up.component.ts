import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

	name: string;
	email: string;
	password: string;	
	private url = 'http://ewapi.krishna-seva.net/api/signup';
	token : string;
  cookieValue = 'UNKNOWN'; 

  	constructor(private http : HttpClient, private cookieService : CookieService) { 
    }

  	ngOnInit() {
  	}

  	onKeyUp() {
  		this.getJSON();
  	}

  	onClick() {
  		this.getJSON();
  	}

  	getJSON() {
  		let post = {name: this.name, email: this.email, password: this.password};

  		this.http.post(this.url, post)
  		.subscribe(
        (response: Response) => {

  			this.token = response['token'];

  			this.storeTokenInCookie();
        this.displayName();

  		}, (error: Response) => {

        if(error.status == 401)
          alert('The user already exists.');
        else
          alert('An unexpected error occured.');

      });      
  	}

    storeTokenInCookie() {

      var expiry_date = new Date();      //Returns time in GMT

      expiry_date.setHours(expiry_date.getHours() + 5 + 10);  //Token will expire in 10 hours

      expiry_date.setMinutes(expiry_date.getMinutes() + 30 + 0);

      this.cookieService.set('sign_up_token',this.token, expiry_date);

      this.cookieValue = this.cookieService.get('sign_up_token');

      console.log(this.cookieValue);
    }

    displayName() {

      var label = document.getElementById('display_name_sign_up');

      label.innerHTML = 'Welcome, ' + this.name + '!';
    }

}
