import { Component, OnInit } from '@angular/core';
import { BazaarService } from '../services/bazaar.service';
import { SharedService } from '../shared.service';
import { FormDataService } from '../shared/form-data.service';


@Component({
  selector: 'app-form-three',
  templateUrl: './form-three.component.html',
  styleUrls: ['./form-three.component.scss']
})
export class FormThreeComponent implements OnInit {
  items: any;
  itemNames: string[] = []; // For storing item names for the autocomplete
  filteredItemNames: string[] = []; // Suggestions based on the user's input
  searchedItem: any;
  searchQuery: string = '';
  isVisible: boolean = false;
  selectedItem: any = null;

  constructor(
    private bazaarService: BazaarService,
    private sharedService: SharedService,
    private formDataService: FormDataService,) {}

    ngOnInit(): void {
      this.sharedService.isLoggedIn$.subscribe(loggedIn => {
        this.isVisible = loggedIn;
      });
      this.bazaarService.fetchBazaarData().subscribe(
        data => {
          this.bazaarService.storeBazaarData(data);
          this.items = data;
          this.itemNames = Object.keys(this.items).map(key => this.items[key].name);
          
          // Retrieve the saved search query when initializing the component
          this.searchQuery = this.formDataService.getFormThreeSearchQuery();
          
          // If there's a saved search query, restore the search results and the selected item
          if (this.searchQuery) {
            this.onSearchChange(this.searchQuery);  // This should repopulate filteredItemNames
            
            // Attempt to restore the selectedItem if there was one
            const itemKey = Object.keys(this.items).find(
              key => this.items[key].name.toLowerCase() === this.searchQuery.toLowerCase()
            );
            if (itemKey) {
              this.selectedItem = this.items[itemKey];
            }
          }
        },
        error => {
          console.error('Error fetching Bazaar data', error);
        }
      );
    }
    

  performSearch(query: string): void {
    // Logic to perform the search and filter items
    // This would involve setting your filteredItemNames or however you're handling the display of search results
    this.filteredItemNames = this.itemNames.filter(name =>
      name.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 10); // Limit the results to 10 as previously mentioned
  }

  onSearchChange(searchValue: string): void {
    this.searchQuery = searchValue;
    this.performSearch(this.searchQuery);
    this.formDataService.saveFormThreeSearchQuery(this.searchQuery);
  }
  
  displayItemInfo(itemName: string): void {
    // Find the item based on the item name
    const itemKey = Object.keys(this.items).find(
      key => this.items[key].name.toLowerCase() === itemName.toLowerCase()
    );

    if (itemKey !== undefined) {
      this.selectedItem = this.items[itemKey];
    } else {
      this.selectedItem = null;
      // Optionally, handle the case where the item is not found
    }
  }
  selectItem(itemName: string): void {
    this.searchQuery = itemName;
    this.filteredItemNames = [];
    
    // Find the key associated with the item name
    const itemKey = Object.keys(this.items).find(
      key => this.items[key].name.toLowerCase() === itemName.toLowerCase()
    );
  
    // Ensure itemKey is defined before attempting to use it
    if (itemKey !== undefined) {
      this.searchedItem = this.items[itemKey];
    } else {
      // Handle the case where the item is not found
      this.searchedItem = null;
      console.error('Item not found!');
      // You might want to display an error message to the user as well
    }
  }
  
  addToAlert(item: any): void {
    // Your logic to set alert, e.g., -5% price
    console.debug('Alert added for item', item);
  }

  triggerDebugAlert(): void {
    console.debug('Debug alert triggered');
  }


  
}
