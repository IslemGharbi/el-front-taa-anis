import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { InventoriesComponent } from './inventories/inventories.component';
import { NetworkComponent } from './network/network.component';
import { ServorComponent } from './servor/servor.component';
import { VservorComponent } from './vservor/vservor.component';
import { ManagmentComponent } from './managment/managment.component';
import { DcgComponent } from './dcg/dcg.component';
import { MappingComponent } from './mapping/mapping.component';
import { AgmCoreModule } from '@agm/core';
import { AdminComponent } from './admin/admin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AjouterutilisateurComponent } from './admin/ajouterutilisateur/ajouterutilisateur.component';
import { UpdateComponent } from './admin/update/update.component';
import { PipeModule } from './pipe/pipe.module';
import { AddServorComponent } from './servor/add-servor/add-servor.component';
import { UpdateServorComponent } from './servor/update-servor/update-servor.component';
import { AddRockComponent } from './inventories/add-rock/add-rock.component';
import { UpdateRackComponent } from './inventories/update-rack/update-rack.component';
import { AddFournisseurComponent } from './network/add-fournisseur/add-fournisseur.component';
import { UpdateFournisseurComponent } from './network/update-fournisseur/update-fournisseur.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    InventoriesComponent,
    NetworkComponent,
    ServorComponent,
    VservorComponent,
    ManagmentComponent,
    DcgComponent,
    MappingComponent,
    AdminComponent,
    NavbarComponent,
    AjouterutilisateurComponent,
    UpdateComponent,
    AddServorComponent,
    UpdateServorComponent,
    AddRockComponent,
    UpdateRackComponent,
    AddFournisseurComponent,
    UpdateFournisseurComponent,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    PipeModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDvGXe-J_-JIKZABDo3m_SjXQz88sLOvZk'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
