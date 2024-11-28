import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchParamsService {
  // The variables to store search parameters
  selectedFromLocation: number =0;
  selectedToLocation: number =0;
  selectedDate!: Date;

  // Method to update the search parameters
  setSearchParams(fromLocation: number, toLocation: number, travelDate: Date): void {
  this.selectedFromLocation = fromLocation;
  this.selectedToLocation = toLocation;
  this.selectedDate = travelDate;
  console.log('Search parameters set:', { fromLocation, toLocation, travelDate });
}

getSearchParams(): { sfromLocation: number ; toLocation: number ; date: Date } {
  console.log('Getting search parameters:', { 
    sfromLocation: this.selectedFromLocation, 
    toLocation: this.selectedToLocation, 
    travelDate: this.selectedDate 
  });
  return {
    sfromLocation: this.selectedFromLocation,
    toLocation: this.selectedToLocation,
    date: this.selectedDate
  };
}

}
