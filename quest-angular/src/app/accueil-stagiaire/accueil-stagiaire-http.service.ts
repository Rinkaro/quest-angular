import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Matiere, Stagiaire, Utilisateur } from '../model';

@Injectable({
  providedIn: 'root'
})
export class AcceuilStagiaireHttpService {
  matieres: Array<Matiere> = new Array<Matiere>;
  currentUtilisateur: Utilisateur;
  currentStagiaire: Stagiaire;

  constructor(private http: HttpClient, private auth: AuthService) {
    this.load();
    /* this.loadMatieres(); */
  }

  findAllMatiere(): Array<Matiere> {
    return this.matieres
  }

  findByIdUti(id: number): Observable<Utilisateur> {
    return this.http.get<Utilisateur>("http://localhost:8888/utilisateur/" + id);
  }

  findByIdSta(id: number): Observable<Stagiaire> {
    return this.http.get<Stagiaire>("http://localhost:8888/stagiaire/" + id);
  }

  private load(): void {
      this.findByIdUti(this.auth.connected.id).subscribe(resp => {
        this.currentUtilisateur=resp;
    });
    
      this.findByIdSta(this.auth.connected.id).subscribe(resp => {
      this.currentStagiaire=resp;
    });
  }
  

}