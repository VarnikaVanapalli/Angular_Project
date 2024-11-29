import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule for Angular directives
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { BusService } from '../../service/bus.service';
import { LocationService } from '../../service/location.service';
import { TrendingPackagesComponent } from "../trending-packages/trending-packages.component";
import { EnjoyAppComponent } from "../enjoy-app/enjoy-app.component";
import { FooterComponent } from "../footer/footer.component";
import { SearchParamsService } from '../../service/search-params.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterLink,
    RouterModule,
    RouterOutlet,
    TrendingPackagesComponent,
    EnjoyAppComponent,
    FooterComponent
],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
   // Bind this to the date picker input

   menuOpen = false;
  locations: { id: number, name: string }[] = []; // Locations should be an array of objects with id and name
  buses: any[] = [];
  fromLocation: number=0 ;  // Store location ids
  toLocation: number=0;    // Store location ids
  travelDate!: Date;

  constructor(
    private router :Router,
    private searchParamsService: SearchParamsService,
    private locationService: LocationService,
  ) {}
  ngOnInit(): void {

    this.locationService.getLocations().subscribe({
      next: (data) => { // Log the response from the backend
        this.locations = data; // Assuming the response is an array of objects with { id, name }
        },
      error: (err) => {
        console.error('Error fetching locations:', err); // Log any error
      }
    });
  }
  onFromLocationChange(id:EventTarget | null): void {
    if (!id){
      return
    }
    const element:any = id;
    this.fromLocation = element.value;
    console.log('Selected From Location ID:', this.fromLocation);
  }
  onToLocationChange(id:EventTarget|null):void{
    if (!id){
      return
    }
    const element:any = id;
    this.toLocation = element.value;
    console.log('Selected to Location ID:', this.toLocation);
  }
  func(datte:EventTarget|null):void{
    if(!datte){
      return
    }
    const element:any = datte;
    this.travelDate = element.value;
    console.log('Selected date:', this.travelDate);
    
    console.log('Setting search parameters:', { 
      fromLocation: this.fromLocation, 
      toLocation: this.toLocation, 
      travelDate: this.travelDate 
    });
    this.searchParamsService.setSearchParams(this.fromLocation, this.toLocation, this.travelDate);
    
  }
  
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  
  redirectBuses(){
    
    this.router.navigate(['/available-buses']);

  }

  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    
    console.log('Sidebar state:', this.isSidebarOpen); // Debug log
  }

  closeSidebar() {
    this.isSidebarOpen = false;
    console.log('Sidebar state:', this.isSidebarOpen); // Debug log

  }
  debugToggle() {
    alert('Button Clicked');

;    
  }



  // onSearch(): void {
  //   // When the user submits the search, fetch the buses based on the selected locations
  //   if (this.fromLocation && this.toLocation) {
  //     this.busService
  //       .getBuses(this.fromLocation, this.toLocation)
  //       .subscribe((data) => {
  //         this.buses = data;
  //       });
  //   }
  // }
}

  

