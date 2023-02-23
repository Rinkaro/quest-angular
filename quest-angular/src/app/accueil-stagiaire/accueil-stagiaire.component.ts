import { Component } from '@angular/core';
import { Matiere, Ordinateur, Stagiaire, Utilisateur } from '../model';
import { OrdinateurHttpService } from '../ordinateur/ordinateur-http.service';
import { StagiaireHttpService } from '../stagiaire/stagiaire-http.service';
import { AcceuilStagiaireHttpService } from './accueil-stagiaire-http.service';

@Component({
  selector: 'app-accueil-stagiaire',
  templateUrl: './accueil-stagiaire.component.html',
  styleUrls: ['./accueil-stagiaire.component.scss']
})
export class AccueilStagiaireComponent {
  

  constructor(private acccueilStagiaireService: AcceuilStagiaireHttpService) {

  }

  getCurrentUtilisateur(): Utilisateur {
    return this.acccueilStagiaireService.currentUtilisateur;
  }

  getCurrentStagiaire(): Stagiaire {
    return this.acccueilStagiaireService.currentStagiaire;
  }


}
