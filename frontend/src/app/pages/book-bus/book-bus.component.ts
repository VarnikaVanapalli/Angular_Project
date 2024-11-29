
import { AvailableBusesComponent } from '../available-buses/available-buses.component';
import { ChangeDetectorRef, Component , inject , OnInit} from '@angular/core';
import { LocationService } from '../../service/location.service';
import { BusService } from '../../service/bus.service';
import { MasterService } from '../../service/master.service';
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
import moment from 'moment';
import { BrowserModule } from '@angular/platform-browser';
import { MovingbusComponent } from "../movingbus/movingbus.component";
import Swal from 'sweetalert2';


@Component({
  selector: 'app-book-bus',
  standalone: true,
  imports: [AsyncPipe, FormsModule, DatePipe, RouterLink, CommonModule, RouterOutlet, RouterModule, FooterComponent, MovingbusComponent,BookBusComponent],
  templateUrl: './book-bus.component.html',
  styleUrl: './book-bus.component.css'
})
export class BookBusComponent {
  
  location$: Observable<any[]> = new Observable<any[]>;

  busId:number|null=null;
  busList: any[]=[];
  busDetails: any;
  pricePerSeat:number=0;
  bookSeats: number=0;
  totalSeats:number=0;
  seats: any[] = [];
  duration: string="";
  constructor(
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
    private locationService: LocationService,
    private busService: BusService
  ) {
    
  }
  ngOnInit() {
      this.busId = Number(this.route.snapshot.paramMap.get('id'));
    
    if (this.busId) {
      // Fetch the bus details using the bus ID
      this.busService.getBusDetails(this.busId).subscribe(data => {
        this.busDetails = data;
        console.log(this,this.busDetails);
      });
    }
    this.pricePerSeat = this.busDetails.price;
    this.totalSeats=this.busDetails.totalSeats;
    this.bookSeats=this.busDetails.totalSeats - this.busDetails.availableSeats;
    const departureTime = new Date('1970-01-01T' + this.busDetails.departureTime + 'Z');
    const arrivalTime = new Date('1970-01-01T' + this.busDetails.arrivalTime + 'Z');

    const durationMs = arrivalTime.getTime() - departureTime.getTime();
    const durationMinutes = Math.floor(durationMs / 60000);  // Convert milliseconds to minutes
    const durationHours = Math.floor(durationMinutes / 60);
    const durationRestMinutes = durationMinutes % 60;

    this.duration = `${durationHours} h ${durationRestMinutes} min`;

    this.seats = Array.from({ length: this.busDetails.totalSeats }, (_, i) => ({
      number: i + 1, // Seat numbers from 1 to totalSeats
      selected: false, // Initial state is unselected
      isBooked: i < (this.busDetails.totalSeats - this.busDetails.availableSeats), // Mark seats as booked based on availableSeats
    }));
    console.log(this.totalSeats,this.pricePerSeat);
    this.cdr.detectChanges();

  }

  
  

  

   // Price per seat in INR

  // Getters for dynamic counts
  get selectedSeatsCount(): number {
    return this.seats.filter((seat) => seat.selected).length;
  }

  get availableSeatsCount(): number {
    return this.seats.filter((seat) => !seat.isBooked && !seat.selected).length;
  }

  get totalPrice(): number {
    return this.selectedSeatsCount * this.pricePerSeat;
  }

  get selectedSeatNumbers(): number[] {
    return this.seats
      .filter((seat) => seat.selected)
      .map((seat) => seat.number);
  }

  // Toggle seat selection
  toggleSeat(index: number): void {
    if (!this.seats[index].isBooked) {
      this.seats[index].selected = !this.seats[index].selected;
    }
  }

  

  
  isModalVisible: boolean = false;
  bookSeat() {
    // Logic for booking seat (can be enhanced further)
    Swal.fire({
      title: 'Success!',
      text: 'Ticket booked successfully.',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  }

  closeModal() {
    this.isModalVisible = false;
  }
}
