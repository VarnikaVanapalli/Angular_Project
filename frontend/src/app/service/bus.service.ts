import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BusService {
  private apiUrl = 'http://localhost:8080/api/buses'; // Update this URL if needed

  constructor(private http: HttpClient) {}

  // Get buses based on search criteria (fromLocation, toLocation)
  getBuses(fromLocation: number, toLocation: number): Observable<any[]> {
    const params = new HttpParams()
      .set('fromLocation', fromLocation)
      .set('toLocation', toLocation);
    return this.http.get<any[]>(this.apiUrl, { params });
  }
}
