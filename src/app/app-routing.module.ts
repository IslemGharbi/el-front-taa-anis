import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { AdminComponent } from './admin/admin.component';
import { DcgComponent } from './dcg/dcg.component';
import {HomeComponent} from './home/home.component';
import { InventoriesComponent } from './inventories/inventories.component';
import {LoginComponent} from './login/login.component'
import { ManagmentComponent } from './managment/managment.component';
import{MappingComponent} from './mapping/mapping.component'
import { NetworkComponent } from './network/network.component';
import { ServorComponent } from './servor/servor.component';
import { VservorComponent } from './vservor/vservor.component';
import { AjouterutilisateurComponent } from './admin/ajouterutilisateur/ajouterutilisateur.component' ;
import { UpdateComponent } from './admin/update/update.component';
import { AddServorComponent } from './servor/add-servor/add-servor.component';
import { UpdateServorComponent } from './servor/update-servor/update-servor.component';
import { UpdateRackComponent } from './inventories/update-rack/update-rack.component';
import { AddRockComponent } from './inventories/add-rock/add-rock.component';
import { AddFournisseurComponent } from './network/add-fournisseur/add-fournisseur.component';
import { UpdateFournisseurComponent } from './network/update-fournisseur/update-fournisseur.component';
import { TestSideBArComponent } from './test-side-bar/test-side-bar.component';
import { DetailsComponent } from './servor/details/details.component';

const routes: Routes = [
  {path : 'login', component: LoginComponent},
  {path : 'home', component: HomeComponent},
  {path: '', component: LoginComponent},
  {path: 'mapping', component: MappingComponent},
  {path: 'vservor', component: VservorComponent},
  {path: 'servor', component: ServorComponent},
  {path: 'network', component: NetworkComponent},
  {path: 'managment', component: ManagmentComponent},
  {path: 'inventories', component: InventoriesComponent},
  {path: 'dcg', component: DcgComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'ajouterutilisateur', component: AjouterutilisateurComponent},
  {path: 'update/:username',component:UpdateComponent},
  {path: 'add-servor',component:AddServorComponent},
  {path: 'update-servor/:id',component:UpdateServorComponent},
  {path: 'add-rock',component:AddRockComponent},
  {path: 'update-rack/:id',component:UpdateRackComponent},
  {path : 'add-fournisseur',component:AddFournisseurComponent},
  {path: 'update-fournisseur/:id',component:UpdateFournisseurComponent},
  {path: 'test',component:TestSideBArComponent },
  {path :'details/:id',component:DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
