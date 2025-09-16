import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiUrl = 'http://localhost:5000/phq/answers';

  constructor(private http: HttpClient) {}

  savePhq2Result(payload: any): Observable<any> {
    return this.http.post(this.apiUrl, payload);
  }

}
