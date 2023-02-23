import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthDTO, Personne, Utilisateur } from '../model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  connected: Utilisateur = new Utilisateur();
  utilisateurs:  Array<Utilisateur> = new Array<Utilisateur>();
  role: Array<string>;
  logged: boolean;

  constructor(private http: HttpClient, private router: Router) {
        
    if(this.connected.identifiant) {
      this.logged=true;
    }
    else this.logged=false;

  }


  login(dto: AuthDTO):void {
    console.log(dto);
    this.http.post<Utilisateur>("http://localhost:8888/utilisateur/auth", dto).subscribe(resp => {
      this.connected = resp;
      console.log(this.connected.nom);
      this.logged = true;
      this.router.navigate(['/accueil'+this.connected.roles[0].toLowerCase()]);
    })
  }

  logout():void {
    this.connected = new Utilisateur();
    this.logged=false;
    this.router.navigate(['']);
  }
  //private load(): void {
  //  this.http.get<Array<Utilisateur>>("http://localhost:8888/utilisateur").subscribe(resp => {
  //    this.utilisateurs = resp;
  //  });
  //}
}
