import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthDTO, Personne, Utilisateur } from '../model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  connected: Utilisateur;
  connectedDTO: AuthDTO;
  utilisateurs:  Array<Utilisateur> = new Array<Utilisateur>();

  constructor(private http: HttpClient) {
    this.load();
  }


  seconnecter(dto: AuthDTO):void {
    this.http.post<Utilisateur>("http://localhost:8888/utilisateur/auth", dto).subscribe(resp => {
      this.connected = resp;
      console.log(this.connected.nom);
    })
  }

  private load(): void {
    this.http.get<Array<Utilisateur>>("http://localhost:8888/utilisateur").subscribe(resp => {
      this.utilisateurs = resp;
    });
  }
}
