import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
// import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private afAuth: AngularFireAuth,
        // private authService: AuthService
    ){}

    canActivate(): Observable<boolean>{
        return this.afAuth.authState.map( auth => {
            if(!auth){
                console.log("Not Permitted. Redirecting to /login");
                // this.router.navigate(['/login']);
                this.router.navigateByUrl('/login');
                return false;
            } else{ 
                console.log("Permitted");
                return true;
            }
        })
    }
    // canActivate(): boolean {
    //     let auth = this.authService.getAuth();
    //     let state = false;
    //     auth.map( auth => {
    //         if (auth){
    //             state = true;
    //             console.log("State:"+state);
    //         }else{
    //             state = false;
    //             console.log("State a:"+state);
    //         }
    //     });

    //     return state;
    // }
}