import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

	email: string;
	password: string;
	token: string;
	private url = 'http://52.24.120.4:8001/api/signin';

  	constructor(private http: HttpClient) { }

  	ngOnInit() {
  	}

  	onKeyUp() {
  		this.getJSON();
  	}

  	onClick() {
  		this.getJSON();
  	}

  	getJSON() {
  		let post = {email: this.email, password: this.password};

  		this.http.post(this.url, post)
  		.subscribe((response: Response) => {

  			this.token = response['token'];
  			
  		});
  	}

}
