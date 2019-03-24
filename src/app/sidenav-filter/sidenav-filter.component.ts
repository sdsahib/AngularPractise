import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-filter',
  templateUrl: './sidenav-filter.component.html',
  styleUrls: ['./sidenav-filter.component.css']
})
export class SidenavFilterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sortBy(by: string){
    console.log('Sort ' + by);
  }
}
