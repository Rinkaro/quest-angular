import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilFormateurComponent } from './accueil-formateur/accueil-formateur.component';
import { AccueilStagiaireComponent } from './accueil-stagiaire/accueil-stagiaire.component';
import { AuthComponent } from './auth/auth.component';
import { FiliereComponent } from './filiere/filiere.component';
import { FormateurComponent } from './formateur/formateur.component';
import { HomeComponent } from './home/home.component';
import { MatiereComponent } from './matiere/matiere.component';
import { OrdinateurComponent } from './ordinateur/ordinateur.component';
import { StagiaireComponent } from './stagiaire/stagiaire.component';

const routes: Routes = [
  {path: "", component: HomeComponent, pathMatch: 'full'},
  {path: "stagiaire", component: StagiaireComponent},
  {path: "filiere", component: FiliereComponent},
  {path: "ordinateur", component: OrdinateurComponent},
  {path: "accueilstagiaire", component: AccueilStagiaireComponent},
  {path: "auth", component: AuthComponent},
  {path: "matiere", component: MatiereComponent},
  {path: "formateur", component: FormateurComponent},
  {path: "accueilformateur", component: AccueilFormateurComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
