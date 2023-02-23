import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personne } from '../model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  utilisateur: Personne;
  constructor(private http: HttpClient) { }
}
