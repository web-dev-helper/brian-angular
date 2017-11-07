import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SettingsService } from '../../services/settings.service';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isLoggedIn: boolean;
  loggedInUser: string;
  showRegister: boolean;
  showSpinner: boolean=false;

  constructor(
    private authService:AuthService,
    private router:Router,
    private settingsService: SettingsService,
    private loadingService: LoadingService
  ) { }

  ngOnInit() {
    // To display logged in user's email on top right of the screen
    this.authService.getAuth().subscribe( auth => {
      if(auth){
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
      }else{
        this.isLoggedIn = false;
      }
    });

    // To display Setting button (gearbox icon) if register is allowed
    this.showRegister = this.settingsService.getSettings().allowRegistration;

    // To display spinner while data is loading
    this.loadingService.getStatus().subscribe( status => {
      // console.log("NavBar subscription value : "+this.showSpinner);
      this.showSpinner = status;
      // console.log("NavBar subscription value changed to: "+this.showSpinner);
    });
  }
  
  onLogoutClick(){
    this.authService.logout();
    this.router.navigateByUrl("/login");
  }
}
