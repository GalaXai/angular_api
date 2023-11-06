import { Component } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-form-one',
  templateUrl: './form-one.component.html',
  styleUrls: ['./form-one.component.scss']
})
export class FormOneComponent {
  username: string = '';
  profiles: any[] = [];
  isLoading: boolean = false;
  errorMessage: string = ''
  cuteNameColors: { [key: string]: string } = {
    Tomato: '#FF6347',
    Pear: '#C9CC3F',
    Lime: '#32CD32',
  };

  constructor(private profileService: ProfileService) {}

  onFetchProfiles(): void {
    if (!this.username) {
      this.errorMessage = 'Please enter a username.';
      return;
    }

    this.isLoading = true;
    this.profileService.getProfile(this.username).subscribe({
      next: (response) => {
        this.profiles = Object.values(response.profiles);
        this.isLoading = false;
        console.log(this.profiles);
      },
      error: (error) => {
        this.errorMessage = 'Failed to load profiles.';
        this.isLoading = false;
      }
    });
  }


  ngOnInit() {
    this.getProfile('somePlayerName'); // Call this with actual player name
  }

  getProfile(playerName: string) {
    this.profileService.getProfile(playerName).subscribe(
      data => {
        // Assuming data.profiles is the object containing profile data
        this.processProfiles(data.profiles);
      },
      error => {
        console.error('There was an error!', error);
      }
    );
  }

  processProfiles(profiles: any) {
    for (const profileId in profiles) {
      if (profiles.hasOwnProperty(profileId)) {
        const profile = profiles[profileId];
        // Approximate the purse to an integer and average level to two decimal places
        profile.data.purse = parseFloat(profile.stats.purse.toFixed(0));
        profile.data.average_level = parseFloat(profile.average_level.toFixed(2));
        // Add this profile to the array
        this.profiles.push(profile);
      }
    }
  }

  getImageUrl(gameMode: string): string {
    // Implement your logic to map the game mode to an image URL
    // This is a placeholder function
    return `assets/images/${gameMode}.png`;
  }

  getBackgroundColor(cuteName: string): string {
    // return the hex color code based on the cuteName from the dictionary
    return this.cuteNameColors[cuteName] || '#FFFFFF'; // default to white if not found
  }
}
