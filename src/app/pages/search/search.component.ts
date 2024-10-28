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
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [AsyncPipe, FormsModule, DatePipe, RouterLink, CommonModule, RouterOutlet, RouterModule, LoginPageComponent, BusSeatsComponent, TrendingPackagesComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  // constructor(private router: Router) {}

  // // Method to navigate to the login page
  // goToLogin() {
  //   this.router.navigate(['/login-page']);
  // }

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
    this.masterSrv.searchBus(fromLocation,toLocation,travelDate).subscribe((res:any)=>{
      this.busList=res;
    })
  }
}

