import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-queue-status',
  templateUrl: './queue-status.component.html',
  styleUrls: ['./queue-status.component.css']
})

export class QueueStatusComponent implements OnInit {

	results: any;
	queue_position: string;
	url = 'http://52.24.120.4:8001/api/queue/';
	queue_id: String;

  	onClick(){

  		this.handleEvent();
 	}

  	onKeyUp(){

  		this.handleEvent();
  	}

  	handleEvent() {

  		if(this.queue_id != null){
  			console.log(this.queue_id);
  			this.getJSON();
  		} else {
  			console.log('No entry found');
  		}	

  	}

  	constructor(private http: HttpClient) { }

  	ngOnInit(): void {

  	}

  	getJSON(): any {

  		return this.http.get( this.url + this.queue_id )
  						.subscribe((res: Response) => {

  		console.log(res);

		this.queue_position = res['position'];
  		
  	});
  }
  
}
