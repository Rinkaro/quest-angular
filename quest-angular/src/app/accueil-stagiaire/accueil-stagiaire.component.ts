import { Component } from '@angular/core';
import { Ordinateur, Stagiaire } from '../model';
import { OrdinateurHttpService } from '../ordinateur/ordinateur-http.service';
import { StagiaireHttpService } from '../stagiaire/stagiaire-http.service';

@Component({
  selector: 'app-accueil-stagiaire',
  templateUrl: './accueil-stagiaire.component.html',
  styleUrls: ['./accueil-stagiaire.component.scss']
})
export class AccueilStagiaireComponent {
  
  formStagiaire: Stagiaire = null;

  ordinateurOrphans: Array<Ordinateur>;

  constructor(private stagiaireService: StagiaireHttpService, private ordinateurService: OrdinateurHttpService) {
  }

  list(): Array<Stagiaire> {
    return this.stagiaireService.findAll();
  }

  listCivilites(): Map<string, string> {
    return this.stagiaireService.findAllCivilite();
  }

  listOrdinateurs(): Array<Ordinateur> {
    return this.ordinateurOrphans;
  }

  add(): void {
    this.formStagiaire = new Stagiaire();
    this.formStagiaire.ordinateur = new Ordinateur();
    
    this.ordinateurService.findAllOrphans().subscribe(resp => {
      this.ordinateurOrphans = resp;
    });
  }

  edit(id: number): void {
    this.stagiaireService.findById(id).subscribe(response => {
      this.formStagiaire = response;

      if(!this.formStagiaire.ordinateur) {
        this.formStagiaire.ordinateur = new Ordinateur();
        this.ordinateurService.findAllOrphans().subscribe(resp => {
          this.ordinateurOrphans = resp;
        });
      } else {
        this.ordinateurService.findAllOrphans(this.formStagiaire.ordinateur.id).subscribe(resp => {
          this.ordinateurOrphans = resp;
        });
      }
    });
  }

  save(): void {
    if(this.formStagiaire.id) { // UPDATE
      this.stagiaireService.update(this.formStagiaire);
    } else { // CREATE
      this.stagiaireService.create(this.formStagiaire);
    }

    this.cancel();
  }

  remove(id: number): void {
    this.stagiaireService.remove(id);
  }

  cancel(): void {
    this.formStagiaire = null;
  }

}
