import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import{environment} from 'src/environments/environment';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class ManageUserService {
api = environment.api;
  constructor(private http: HttpClient) { }

  // get User
  getUser(): Observable<User>{
    return this.http.get<User>(`${this.api}/user`);
  }
}
