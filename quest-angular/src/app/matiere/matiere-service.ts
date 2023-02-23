import { Injectable } from '@angular/core';
import { FormateurService } from '../formateur/formateur.service';
import { Formateur, Matiere } from '../model';

@Injectable({
  providedIn: 'root'
})
export class MatiereService {

   matieres: Array<Matiere> = new Array<Matiere>();

  constructor(private formateurService: FormateurService) { 
    this.matieres.push(new Matiere(1,0,"Angular",3710,this.formateurService.findById(3)))
    this.matieres.push(new Matiere(2,0,"Json",2394,this.formateurService.findById(5)))
    }

    findAll(): Array<Matiere> {
      return this.matieres;
    }
  
    findById(id: number): Matiere {
      return this.matieres.find(mat => mat.id == id);
    }
  
    create(matiere: Matiere): void {
      let maxId = 0;
  
      this.matieres.forEach(mat => {
        if(mat.id > maxId) {
          maxId = mat.id;
        }
      });
      matiere.id = maxId + 1;
      matiere.version = 0;
  
      this.matieres.push(matiere);
    }
  
    update(matiere: Matiere): void {
      let idx: number;
  
      idx = this.matieres.findIndex(mat => mat.id == matiere.id);
  
      matiere.version++;
  
      this.matieres[idx] = matiere;
    }
  
    remove(id: number): void {
      let idx: number = this.matieres.findIndex(mat => mat.id == id);
  
      this.matieres.splice(idx, 1);
    }
}
