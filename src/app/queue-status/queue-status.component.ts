import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';

@Component({
  selector: 'app-queue-status',
  templateUrl: './queue-status.component.html',
  styleUrls: ['./queue-status.component.css']
})

export class QueueStatusComponent implements OnInit {

	results: any;
	queue_position: string;
	private url = 'http://52.24.120.4:8001/api/queue/';
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

    this.displayResult();
  		
  	});
  }

  displayResult() {

    var label = document.getElementById('queue_status');

    label.innerHTML = 'Queue Position: ' + this.queue_position;
  }
  
}
