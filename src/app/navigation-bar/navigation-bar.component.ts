import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

    isIn = false;   

  constructor() { }

  ngOnInit() {
  }

    toggleState() { 
        let bool = this.isIn;
        this.isIn = bool == false ? true : false; 
    }
}
