import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule for Angular directives
import { RouterLink, RouterModule } from '@angular/router';
import { BusService } from '../../service/bus.service';
import { LocationService } from '../../service/location.service';
import { TrendingPackagesComponent } from "../trending-packages/trending-packages.component";
import { EnjoyAppComponent } from "../enjoy-app/enjoy-app.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterLink,
    RouterModule,
    TrendingPackagesComponent,
    EnjoyAppComponent,
    FooterComponent
],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  locations: { id: number, name: string }[] = []; // Locations should be an array of objects with id and name
  buses: any[] = [];
  fromLocation: number = 0;  // Store location ids
  toLocation: number = 0;    // Store location ids
  travelDate: Date | undefined;

  constructor(
    private locationService: LocationService,
    private busService: BusService
  ) {}

  ngOnInit(): void {
    this.locationService.getLocations().subscribe({
      next: (data) => {
        console.log('Locations from backend:', data); // Log the response from the backend
        this.locations = data; // Assuming the response is an array of objects with { id, name }
      },
      error: (err) => {
        console.error('Error fetching locations:', err); // Log any error
      }
    });
  }
  

  onSearch(): void {
    // When the user submits the search, fetch the buses based on the selected locations
    if (this.fromLocation && this.toLocation) {
      this.busService
        .getBuses(this.fromLocation, this.toLocation)
        .subscribe((data) => {
          this.buses = data;
        });
    }
  }
}
