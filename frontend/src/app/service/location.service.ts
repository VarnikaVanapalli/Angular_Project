import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private apiUrl = 'http://localhost:8080/api/locations'; // Update this URL if needed

  constructor(private http: HttpClient) {}

  getLocations(): Observable<{ id: number, name: string }[]> {
    return this.http.get<{ id: number, name: string }[]>(this.apiUrl);
  }
}
