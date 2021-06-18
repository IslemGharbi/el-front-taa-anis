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
import { TestSideBArComponent } from './test-side-bar/test-side-bar.component';
import { DetailsComponent } from './servor/details/details.component';
import { NetworkingComponent } from './networking/networking.component';
import { AddSwitchComponent } from './networking/add-switch/add-switch.component';
import { AddRouterComponent } from './networking/add-router/add-router.component';
import { AddFirewallComponent } from './networking/add-firewall/add-firewall.component';
import { UpdateRouterComponent } from './networking/update-router/update-router.component';
import { UpdateSwitchComponent } from './networking/update-switch/update-switch.component';
import { UpdateFirewallComponent } from './networking/update-firewall/update-firewall.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

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
    TestSideBArComponent,
    DetailsComponent,
    NetworkingComponent,
    AddSwitchComponent,
    AddRouterComponent,
    AddFirewallComponent,
    UpdateRouterComponent,
    UpdateSwitchComponent,
    UpdateFirewallComponent,


  ],
  imports: [
    HttpClientModule,
    NgxChartsModule,
  BrowserAnimationsModule,
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
