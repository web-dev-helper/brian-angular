import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Settings } from '../../interfaces/settings';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  settings:Settings; 

  constructor(
    private settingsService:SettingsService,
    private router:Router
  ) { }

  ngOnInit() {
    this.settings = this.settingsService.getSettings();
    console.log("this.settings:"+JSON.stringify(this.settings));
  }

  onSubmit() {
    console.log("settings:"+JSON.stringify(this.settings));
    this.settingsService.saveSettings(this.settings);
    this.router.navigateByUrl('/');
  }
}
