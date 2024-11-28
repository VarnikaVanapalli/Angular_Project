import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchParamsService {
  constructor() {
    console.log('SearchParamsService instance created');
  }
  
  // The variables to store search parameters
  selectedFromLocation!: number;
  selectedToLocation!: number;
  selectedDate!: Date;

  // Method to update the search parameters
  setSearchParams(fromLocation: number, toLocation: number, travelDate: Date): void {
  console.log('Search parameters set 1:', { fromLocation, toLocation, travelDate });
  this.selectedFromLocation = fromLocation;
  this.selectedToLocation = toLocation;
  this.selectedDate = travelDate;
  console.log('Search parameters set 2:', {
    selectedFromLocation: this.selectedFromLocation,
    selectedToLocation: this.selectedToLocation,
    selectedDate: this.selectedDate
  });
}

getSearchParams(): { sfromLocation: number; toLocation: number ; date: Date } {
  console.log('Getting search parameters:', {
    sfromLocation: this.selectedFromLocation,
    toLocation: this.selectedToLocation,
    travelDate: this.selectedDate,
  });
  return {
    sfromLocation: this.selectedFromLocation,
    toLocation: this.selectedToLocation,
    date: this.selectedDate,
  };
}

}
