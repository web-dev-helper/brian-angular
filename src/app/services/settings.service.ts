import { Injectable } from '@angular/core';
import { Settings } from '../interfaces/settings';

@Injectable()
export class SettingsService {
  settings: Settings = {
    allowRegistration: true
  }

  constructor() {
    if( localStorage.getItem('settings') != null){
      console.log("Fetching from localStorage");
      this.settings = JSON.parse(localStorage.getItem('settings'));
      console.log("Fetched:"+JSON.stringify(this.settings));
    } else {
      console.log("No settings to fetch from localRepository");
    }
  }

  getSettings(){
    console.log("In settings service:"+JSON.stringify(this.settings));
    return this.settings;
  }

  saveSettings(settings:Settings){
    console.log("Saving settings:"+JSON.stringify(settings));
    localStorage.setItem('settings', JSON.stringify(settings));
  }
}
