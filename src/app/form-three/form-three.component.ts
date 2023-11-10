import { Component, OnInit } from '@angular/core';
import { BazaarService } from '../services/bazaar.service';
import { SharedService } from '../shared.service';
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

  constructor(private bazaarService: BazaarService,
    private sharedService: SharedService) {}

  ngOnInit(): void {
    this.sharedService.isLoggedIn$.subscribe(loggedIn => {
      this.isVisible = loggedIn;
    });
    this.bazaarService.fetchBazaarData().subscribe(
      data => {
        this.bazaarService.storeBazaarData(data);
        this.items = data;
        this.itemNames = Object.keys(this.items).map(key => this.items[key].name);
      },
      error => {
        console.error('Error fetching Bazaar data', error);
      }
    );
  }

  onSearchChange(searchValue: string): void {
    this.searchQuery = searchValue;
    if (searchValue) {
      this.filteredItemNames = this.itemNames
        .filter(name => name.toLowerCase().includes(searchValue.toLowerCase()))
        .slice(0, 10); // Only take the first 10 results
    } else {
      this.filteredItemNames = [];
    }
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
