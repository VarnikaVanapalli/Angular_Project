import { Routes } from '@angular/router';
import { SearchComponent } from './pages/search/search.component';
import { BookingComponent } from './pages/booking/booking.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { BusSeatsComponent } from './pages/bus-seats/bus-seats.component';
import { AvailableBusesComponent } from './pages/available-buses/available-buses.component';
import { MovingbusComponent } from './pages/movingbus/movingbus.component';
import { BookBusComponent } from './pages/book-bus/book-bus.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'search',
        pathMatch:'full'

    },
    {
        path:'search',
        component:SearchComponent
    },
    {
        path:'login-page',
        component:LoginPageComponent
    },
    {
        path:'busSeats',
        component:BusSeatsComponent
    },
    {
        path:'available-buses',
        component:AvailableBusesComponent
    },
    {
        path:'movingbus',
        component:MovingbusComponent
    },
    {
        path:'book-bus',
        component:BookBusComponent
    }

];
