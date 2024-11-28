import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Singleton service
})
export class LoginService {
  private baseUrl = 'http://localhost:8080/api/login'; // Update as per your backend endpoint

  constructor(private http: HttpClient) {}

  login(userDetails: { userName: string; userPassword: string }): Observable<any> {
    return this.http.post<any>(this.baseUrl, userDetails);
  }
}
