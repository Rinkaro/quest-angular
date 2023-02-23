import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthDTO, Personne, Utilisateur } from '../model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  connected: Utilisateur;
  utilisateurs:  Array<Utilisateur> = new Array<Utilisateur>();
  role: Array<string>;

  constructor(private http: HttpClient, private router: Router) {
    //this.load();
  }


  login(dto: AuthDTO):void {
    console.log(dto);
    this.http.post<Utilisateur>("http://localhost:8888/utilisateur/auth", dto).subscribe(resp => {
      this.connected = resp;
      console.log(this.connected.nom);
      this.router.navigate(['/accueil'+this.connected.roles[0].toLowerCase()]);
    })
  }

  //private load(): void {
  //  this.http.get<Array<Utilisateur>>("http://localhost:8888/utilisateur").subscribe(resp => {
  //    this.utilisateurs = resp;
  //  });
  //}
}
