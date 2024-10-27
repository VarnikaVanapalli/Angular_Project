import { Routes } from '@angular/router';
import { SearchComponent } from './pages/search/search.component';
import { BookingComponent } from './pages/booking/booking.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { BusSeatsComponent } from './pages/bus-seats/bus-seats.component';

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
        path:'booking/:id',
        component:BookingComponent
    },
    {
        path:'login-page',
        component:LoginPageComponent
    },
    {
        path:'busSeats',
        component:BusSeatsComponent
    }

];
