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
  {path: 'admin/ajouterutilisateur', component: AjouterutilisateurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
