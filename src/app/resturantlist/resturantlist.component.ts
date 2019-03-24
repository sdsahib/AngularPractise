import { Component, OnInit } from '@angular/core';
import { ResturantListModel } from '../model/resturantList.model';
import { ResturantServiceService } from '../resturant-service.service';

@Component({
  selector: 'app-resturantlist',
  templateUrl: './resturantlist.component.html',
  styleUrls: ['./resturantlist.component.css']
})
export class ResturantlistComponent implements OnInit {
  
  resturantLists : ResturantListModel[] =[];
  resturantList: ResturantListModel = new ResturantListModel();
  constructor(private service: ResturantServiceService) {
  }

  ngOnInit() {
    this.getRestaurantList();
  }

  getRestaurantList(){
    this.service.getRestaurantList('getList','1',10).subscribe(data=>{
      this.resturantLists = data['content'];
      console.log(data['content']);
    });
  }

}
