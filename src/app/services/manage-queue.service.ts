import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import{environment} from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ManageQueueService {
  api = environment.api;
  constructor(private http: HttpClient) { }

  // add queue
  addQueue(formData: any): Observable<any>{
    
    return this.http.post<any>(`${this.api}`, formData);
  }
}
