import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule ,Routes} from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ContactComponent } from './contact/contact.component';
import { ShowcontactComponent } from './showcontact/showcontact.component';
import { NotifyComponent } from './notify/notify.component';
import { HospitalComponent } from './hospital/hospital.component';
import { MedicalComponent } from './medical/medical.component';
import { StateComponent} from './state/state.component';

const appRoot: Routes = [{ path: '', component: HomeComponent },
  { path: 'showcontact', component: ShowcontactComponent },
  { path: 'notify', component: NotifyComponent },
  { path: 'hospital', component: HospitalComponent },
  { path: 'medical', component: MedicalComponent },
  { path: 'state', component: StateComponent },

  { path: 'home', canActivate:[AuthGuard],component: HomeComponent },


]
@NgModule({
  declarations: [
    AppComponent,
    
    
    HomeComponent,
    HeaderComponent,
    ContactComponent,
    ShowcontactComponent,
    NotifyComponent,
    HospitalComponent,
    MedicalComponent,
    StateComponent,
    
    
    
  ],
  imports: [

    BrowserModule,FormsModule,
    RouterModule.forRoot(appRoot),
    HttpClientModule,
    BrowserAnimationsModule,
	ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
