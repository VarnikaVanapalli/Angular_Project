import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Singleton service
})
export class RegisterService {
  private baseUrl = 'http://localhost:8080/api/register'; // Update as per your backend endpoint

  constructor(private http: HttpClient) {}

  register(userDetails: { userName: string; userPassword: string }): Observable<any> {
    return this.http.post<any>(this.baseUrl, userDetails);
  }
}
