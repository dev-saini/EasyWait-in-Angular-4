import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

	name: string;
	email: string;
	password: string;	
	private url = 'http://52.24.120.4:8001/api/signup';
	token : string;

  	constructor(private http : HttpClient) { }

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
  		.subscribe((response: Response) => {

  			this.token = response['token'];
  			
  		});
  	}

}
