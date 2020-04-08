import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = environment.apiUrl;

  constructor(private http: Http) { }

  public postApi(url: string, data: any) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('bearer'));

    return this.http.post(
      this.apiUrl + url, 
      data,
      { headers: headers }
      ).map((res : Response ) => res.json());
  }

  public getApi(url: string) { 
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('bearer'));

    return this.http.get(
      this.apiUrl + url, 
      { headers: headers }
      ).map((res : Response ) => res.json());
  }

  public getLatLng(param: string) {
    let headers = new Headers();

    return this.http.get(
      'https://maps.googleapis.com/maps/api/geocode/json?address=' + param + '&key=' + environment.mapKey, 
      { headers: headers }
      ).map((res : Response ) => res.json());
  }
}
