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
	private url = 'http://127.0.0.1:8000/api/queue/';
  private load_component = false;
	queue_id: String;

  	onClick() {

  		this.handleEvent();
 	}

  	onKeyUp() {

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

  		/*return this.http.get( this.url + this.queue_id )
  						.subscribe((res: Response) => {

  		console.log(res);

		this.queue_position = res['position'];

    this.displayResult();
  		
  	}); */

    this.displayResult();
    this.load_component = true;
  }

  displayResult() {

    var label = document.getElementById('queue_pos');

    label.innerHTML = /*'<h3> Queue Position:   </h3>' + this.queue_position;*/
                       '<h3> Queue ID:   </h3>' + this.queue_id; 
    }
  
}
