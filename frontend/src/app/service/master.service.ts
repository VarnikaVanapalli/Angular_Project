import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  private apiURL = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) {}

  getLocations(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiURL}locations`);
  }

  searchBus(from: number, to: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiURL}searchBus?fromLocation=${from}&toLocation=${to}`);
  }
}
