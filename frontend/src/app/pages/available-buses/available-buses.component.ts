import { Component , inject , OnInit} from '@angular/core';
import { BusService } from '../../service/bus.service';
import { LocationService } from '../../service/location.service';
import { Observable } from 'rxjs';
import { AsyncPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink,RouterOutlet,RouterModule,Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { LoginPageComponent } from '../login-page/login-page.component';
import { BusSeatsComponent } from "../bus-seats/bus-seats.component";
import { TrendingPackagesComponent } from "../trending-packages/trending-packages.component";
import { FooterComponent } from "../footer/footer.component";
import { EnjoyAppComponent } from "../enjoy-app/enjoy-app.component";
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { MovingbusComponent } from "../movingbus/movingbus.component";
import { BookBusComponent } from '../book-bus/book-bus.component';
import { SearchParamsService } from '../../service/search-params.service';



@Component({
  selector: 'app-available-buses',
  standalone: true,
  imports: [FormsModule, DatePipe, RouterLink, CommonModule, RouterOutlet, RouterModule],
  templateUrl: './available-buses.component.html',
  styleUrl: './available-buses.component.css'
})
export class AvailableBusesComponent implements OnInit {

  locations: { id: number, name: string }[] = [];
  fromLocation!: number |null ;
  toLocation!: number|null;
  date!: Date |null;
  busList: any[]=[];
  constructor(
    private searchParamsService: SearchParamsService,
    private router: Router,
    private route: ActivatedRoute,
    
    private locationService: LocationService,
    private busService: BusService
  ) {}
  ngOnInit(): void {
    this.locationService.getLocations().subscribe({
      next: (data) => {// Log the response from the backend
        this.locations = data; // Assuming the response is an array of objects with { id, name }
      },
      error: (err) => {
        console.error('Error fetching locations:', err); // Log any error
      }
    });
    const searchParams = this.searchParamsService.getSearchParams();
    this.fromLocation = searchParams.sfromLocation;
    this.toLocation = searchParams.toLocation;
    this.date = searchParams.date;
    if(this.fromLocation&& this.toLocation&&this.date){
      this.fetchAvailableBuses();
    }
   
  }
  fetchAvailableBuses() {
    if (this.fromLocation !== null && this.toLocation !== null) {
    this.busService.getBuses(this.fromLocation, this.toLocation).subscribe(
      (data: any[]) => {
        console.log('details from backend:', data);
        this.busList = data;
      },
      ( error: any) => {
        console.error('Error fetching buses:', error);
      }
    );
  }
}
  
  
  // isHidden: boolean = true;
  // toggleVisibility() {
  //   this.isHidden = false;  // Toggle visibility
  // }
//   onSearch(){
//     const {fromLocation,toLocation,travelDate} = this.searchObj;
//     this.busService.getBuses(fromLocation,toLocation).subscribe((res:any)=>{
//       this.busList=res;
//     })
//   }
// }
//   getAllLocations() {
   
//     throw new Error('Method not implemented.');
//   }

}
