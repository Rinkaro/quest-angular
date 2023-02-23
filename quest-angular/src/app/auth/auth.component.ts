import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthDTO, Utilisateur } from '../model';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  //connected: Utilisateur;
  connectedDTO: AuthDTO = new AuthDTO();

  constructor(private authService: AuthService){

  }

  getConnected():Utilisateur {
    return this.authService.connected
  }

  seconnecter(): void {

    this.authService.login(this.connectedDTO);

  }

}
