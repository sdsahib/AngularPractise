import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ResturantServiceService {
  host = 'http://localhost:8080/';
  controllerAddress = 'upload/';

  constructor(private httpClient: HttpClient) { }

  postFile(fileToUpload: File): Observable<boolean> {
    const endpoint = 'your-destination-url';
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    return this.httpClient
      .post<boolean>(endpoint, formData, { headers: {} });
  }

  pushFileToStorage(file: File, url): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    let apiAddress = this.host + this.controllerAddress;
    formdata.append('file', file);

    const req = new HttpRequest('POST', apiAddress + url, formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.httpClient.request(req);
  }

  getRestaurantList(url,pageNumber,length):Observable<any>{
    let formedUrl = this.host + 'restaurant/' + url + '?page=' + pageNumber + '&size=' +length;
    return this.httpClient.get<any>(formedUrl);
  }
}
