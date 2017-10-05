import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-queue-status',
  templateUrl: './display-queue-status.component.html',
  styleUrls: ['./display-queue-status.component.css']
})

export class DisplayQueueStatusComponent implements OnInit {

	@Input() queue_position: string;
	@Input() queue_id: string;
	@Input() accepting_appointments: boolean;
  @Input() appointments_flag: any;
  @Input() appointments: any;
  
  constructor() {

   }

  ngOnInit() {

  }

  onClick() {
    alert('Coming Soon!');
  }

}
