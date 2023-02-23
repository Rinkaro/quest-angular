import { Injectable } from '@angular/core';
import { Formateur } from '../model';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  formateurs: Array<Formateur> = new Array<Formateur>();
  civilites: Map<string, string> = new Map<string,string>();

  constructor() { 
    this.formateurs.push(new Formateur(3, 0, "MME", "TOTO", "TATA", "TOTO@gmail.com", true, 5));
    this.formateurs.push(new Formateur(5, 0, "M", "TITI", "TUTU", "TITI@hotmail.com", false, 1));
  
    this.civilites.set("M", "Monsieur");
    this.civilites.set("MME", "Madame");
    this.civilites.set("NB", "Non Binaire");
  }
  
  findAllCivilite(): Map<string, string> {
    return this.civilites;
  }

  findAll(): Array<Formateur> {
    return this.formateurs;
  }

  findById(id: number): Formateur {
    return this.formateurs.find(form => form.id == id);
  }

  create(formateur: Formateur): void {
    let maxId = 0;

    this.formateurs.forEach(form => {
      if(form.id > maxId) {
        maxId = form.id;
      }
    });
    formateur.id = maxId + 1;
    formateur.version = 0;

    this.formateurs.push(formateur);
  }

  update(formateur: Formateur): void {
    let idx: number;

    idx = this.formateurs.findIndex(form => form.id == formateur.id);

    formateur.version++;

    this.formateurs[idx] = formateur;
  }

  remove(id: number): void {
    let idx: number = this.formateurs.findIndex(form => form.id == id);

    this.formateurs.splice(idx, 1);
  }
}
