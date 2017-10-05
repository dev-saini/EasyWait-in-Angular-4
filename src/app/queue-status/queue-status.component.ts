import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';

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
  accepting_appointments = 0;
  appointments_flag = 0;
	queue_id: String;
  appointments: any;

    constructor(private http: HttpClient, private cookieService : CookieService) { }

    ngOnInit(): void {

    }

  	onClick() {

  		this.handleEvent();
 	}

  	onKeyUp() {

  		this.handleEvent();
  	}

  	handleEvent() {

  		if(this.queue_id != null) {

  			console.log(this.queue_id);

  			this.getQueueStatus();

        this.getAppointments();

        this.load_component = true;

  		} else {

  			alert('No entry found');

  		}	

  	}

  	getQueueStatus() {

  		return this.http.get( this.url + this.queue_id )
  						.subscribe((res: Response) => {

  		console.log(res);

    this.queue_id = res['id'];
		this.queue_position = res['position'];
    this.accepting_appointments = res['accepting_appointments'];

    //this.displayResult();
  		
  	}, (error: Response) => {

        if(error.status == 401)
          alert('Queue not found');
      }); 
  }

  getAppointments() {

    this.http.get(this.url + this.queue_id + '/appointment', {

              headers: new HttpHeaders()
              .set('Authorization', 'Bearer ' + this.cookieService.get('sign_up_token'))

            })
        .subscribe((response: Response) => {

          if(response == null) {
              this.appointments_flag = 1;
          } else {
            this.appointments_flag = 0;
          }

          console.log(response);
          
          this.appointments = response['appointments'];

          //this.displayResult();

          }, (error: Response) => {

            if(error.status == 401)

              alert('Please Log-In to continue');

            else if(error.status == 404)

              alert('Requested Queue could not be found');

            else if(error.status == 403)

              alert('Appointments Closed');

          });

    }  

  /*displayResult() {

    var label = document.getElementById('queue_pos');

    label.innerHTML = '<h3> Queue Position:   </h3>' + this.queue_position;
                       //'<h3> Queue ID:   </h3>' + this.queue_id; 
    }*/
  
}
