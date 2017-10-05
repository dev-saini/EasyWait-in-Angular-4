import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})

export class NavigationBarComponent implements OnInit {

    isIn = false;   

    private url = 'http://127.0.0.1:8000/api/queue';
    queuelist: string;

    constructor(private http : HttpClient, private cookieService : CookieService) { }

    ngOnInit() {
    }

    toggleState() { 
        let bool = this.isIn;
        this.isIn = bool == false ? true : false; 
    }

}
