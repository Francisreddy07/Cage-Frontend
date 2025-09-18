import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiUrl = 'http://localhost:5000/test/answers';

  constructor(private http: HttpClient) {}

  savePhq2Result(payload: any): Observable<any> {
    return this.http.post(this.apiUrl, payload);
  }

  getScoreByUser(id:any)
  {
    return this.http.get(`http://127.0.0.1:5000/user/result/${id}`)
  }

}
