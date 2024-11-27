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



@Component({
  selector: 'app-available-buses',
  standalone: true,
  imports: [AsyncPipe, FormsModule, DatePipe, RouterLink, CommonModule, RouterOutlet, RouterModule, FooterComponent, MovingbusComponent,BookBusComponent],
  templateUrl: './available-buses.component.html',
  styleUrl: './available-buses.component.css'
})
export class AvailableBusesComponent implements OnInit {

  location$: Observable<any[]> = new Observable<any[]>;
  fromLocation: number=0;
  toLocation: number=0;
  date: Date |undefined;
  busList: any[]=[];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    
    private locationService: LocationService,
    private busService: BusService
  ) {}
  ngOnInit(): void {
    this.getAllLocations();
    this.route.queryParams.subscribe(params => {
      this.fromLocation = +params['selectedFromLocation'];
      this.toLocation = +params['selectedToLocation'];
      this.date = params['selectedDate'];

      if (this.fromLocation && this.toLocation) {
        this.fetchAvailableBuses();
      }
    });
}
  fetchAvailableBuses() {
    this.busService.getBuses(this.fromLocation, this.toLocation).subscribe(
      (data: any[]) => {
        this.busList = data;
      },
      ( error: any) => {
        console.error('Error fetching buses:', error);
      }
    );
  }
  getAllLocations(){
    this.location$=this.locationService.getLocations(); 
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
