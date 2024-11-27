
import { AvailableBusesComponent } from '../available-buses/available-buses.component';
import { Component , inject , OnInit} from '@angular/core';
import { MasterService } from '../../service/master.service';
import { Observable } from 'rxjs';
import { AsyncPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink,RouterOutlet,RouterModule,Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { LoginPageComponent } from '../login-page/login-page.component';
import { BusSeatsComponent } from "../bus-seats/bus-seats.component";
import { TrendingPackagesComponent } from "../trending-packages/trending-packages.component";
import { FooterComponent } from "../footer/footer.component";
import { EnjoyAppComponent } from "../enjoy-app/enjoy-app.component";
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { MovingbusComponent } from "../movingbus/movingbus.component";


@Component({
  selector: 'app-book-bus',
  standalone: true,
  imports: [AsyncPipe, FormsModule, DatePipe, RouterLink, CommonModule, RouterOutlet, RouterModule, FooterComponent, MovingbusComponent,BookBusComponent],
  templateUrl: './book-bus.component.html',
  styleUrl: './book-bus.component.css'
})
export class BookBusComponent {
  location$: Observable<any[]> = new Observable<any[]>;

  masterSrv =inject(MasterService);
  busList: any[]=[];
  searchObj:any={
    fromLocation:'',
    toLocation:'',
    travelDate:''
  }
  ngOnInit(): void {
      this.getAllLocations();
  }

  getAllLocations(){
    this.location$=this.masterSrv.getLocations();

  }
  
  isHidden: boolean = true;
  toggleVisibility() {
    this.isHidden = false;  // Toggle visibility
  }
  onSearch(){
    const {fromLocation,toLocation,travelDate} = this.searchObj;
    this.masterSrv.searchBus(fromLocation,toLocation).subscribe((res:any)=>{
      this.busList=res;
    })
  }

}
