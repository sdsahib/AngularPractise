import { Component, OnInit } from '@angular/core';
import { ResturantServiceService } from '../resturant-service.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-uploadcsv',
  templateUrl: './uploadcsv.component.html',
  styleUrls: ['./uploadcsv.component.css']
})
export class UploadcsvComponent implements OnInit {
  selectedFiles: FileList;
  selectedFiles1: FileList;
  currentFileUpload: File;
  currentFileUpload1: File;
  progress: { percentage: number } = { percentage: 0 };
  progress1: { percentage: number } = { percentage: 0 };
  constructor(private fileUploadService: ResturantServiceService) { }

  ngOnInit() {
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  selectFile1(event) {
    this.selectedFiles1 = event.target.files;
  }

 
  uploadRestaurantDetails() {
    this.progress.percentage = 0;
 
    this.currentFileUpload = this.selectedFiles.item(0);
    this.fileUploadService.pushFileToStorage(this.currentFileUpload,'uploaddetailscsv').subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('Details File is completely uploaded!');
      }
    });
 
    this.selectedFiles = undefined;
  }
  uploadRestaurantAddressDetails() {
    this.progress1.percentage = 0;
 
    this.currentFileUpload1 = this.selectedFiles1.item(0);
    this.fileUploadService.pushFileToStorage(this.currentFileUpload1,'uploadaddresscsv').subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress1.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('Address File is completely uploaded!');
      }
    });
 
    this.selectedFiles = undefined;
  }
}
