import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthDTO, Personne } from '../model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  connected: AuthDTO;
  utilisateurs:  Array<Personne> = new Array<Personne>();

  constructor(private http: HttpClient) {
    this.load();
  }




  private load(): void {
    this.http.get("http://localhost:8888/utilisateur").subscribe(resp => {
      this.utilisateurs = resp;
    });
  }
}
