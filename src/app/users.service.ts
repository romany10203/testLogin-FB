import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user:any;

  constructor(private _HttpClient:HttpClient) {
  }

  sendData(term:any):Observable<any>
  {
    return this._HttpClient.post("",term);
  }

  getMessages():Observable<any>
  {
    return this._HttpClient.get("");
  }

}
