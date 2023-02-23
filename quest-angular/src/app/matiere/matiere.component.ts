import { Component } from '@angular/core';
import { FormateurService } from '../formateur/formateur.service';
import { Formateur, Matiere } from '../model';
import { MatiereHTTPService } from './matiere-http.service';

@Component({
  selector: 'app-matiere',
  templateUrl: './matiere.component.html',
  styleUrls: ['./matiere.component.scss']
})
export class MatiereComponent {
  formMatiere: Matiere= null;

  constructor( private matiereService: MatiereHTTPService, private formateurService:FormateurService) {
  }

  list(): Array<Matiere> {
    return this.matiereService.findAll();
  }

  listFormateurs(): Array<Formateur> {
    return this.formateurService.findAll();
  }

  add(): void {
    this.formMatiere= new Matiere();
   // this.formMatiere.formateur= new Formateur();
  }

  edit(id: number): void {
    this.matiereService.findById(id).subscribe(response => {
      this.formMatiere = response;

    });
  }

  save(): void {
    if(this.formMatiere.id) { // UPDATE
      this.matiereService.update(this.formMatiere);
    } else { // CREATE
      this.matiereService.create(this.formMatiere);
    }

    this.cancel();
  }

  remove(id: number): void {
    this.matiereService.remove(id);
  }

  cancel(): void {
    this.formMatiere = null;
  }
}
