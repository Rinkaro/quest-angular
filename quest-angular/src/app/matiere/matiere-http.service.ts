import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Matiere } from '../model';

@Injectable({
  providedIn: 'root'
})
export class MatiereHTTPService {

  Matieres: Array< Matiere> = new Array<Matiere>();

  constructor(private http: HttpClient) {
    this.load();
  
  }


  findAll(): Array<Matiere> {
    return this.Matieres;
  }

  findById(id: number): Observable<Matiere> {
    return this.http.get<Matiere>("http://localhost:8888/matiere/" + id);
  }

  create(Matiere: Matiere): void {
    
    this.http.post<Matiere>("http://localhost:8888/matiere", Matiere).subscribe(resp => {
      this.load();
    });
  }

  update(Matiere: Matiere): void {
    this.http.put<Matiere>("http://localhost:8888/matiere/" + Matiere.id, Matiere).subscribe(resp => {
      this.load();
    });
  }

  remove(id: number): void {
    this.http.delete<void>("http://localhost:8888/matiere/" + id).subscribe(resp => {
      this.load();
    });
  }

  private load(): void {
    this.http.get<Array<Matiere>>("http://localhost:8888/matiere").subscribe(resp => {
      this.Matieres = resp;
    });
  }

 
}
