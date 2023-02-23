import { Component } from '@angular/core';
import { AuthComponent } from '../auth/auth.component';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  constructor(private authService: AuthService){  

  }

  isConnected(): boolean {
    return this.authService.logged;
  }

  unConnect(): void{
    this.authService.logout();

  }
}
