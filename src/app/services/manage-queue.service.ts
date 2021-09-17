import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import{environment} from 'src/environments/environment';
import sampleData from '../data/data.json';

@Injectable({
  providedIn: 'root'
})
export class ManageQueueService {
  api = environment.api;
  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return of(sampleData).pipe();
  }

  addQueueInfo(formData: any): Observable<any>{ 
    return this.http.post<any>(`${this.api}/<URL>`, formData);
  }

  addDistributionSchedule(formData: any): Observable<any>{ 
    return this.http.post<any>(`${this.api}`, formData);
  }

  addRules(formData: any): Observable<any>{ 
    return this.http.post<any>(`${this.api}`, formData);
  }
}
