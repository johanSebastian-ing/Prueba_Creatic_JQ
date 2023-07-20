import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RegistarseComponent } from './registarse/registarse.component';

const routes: Routes = [
  { path: '', redirectTo: 'registrarse', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,


  },
  {
    path: 'quienessomos',
    component:  AboutUsComponent,


  },
  {
    path: 'contactenos',
    component:  ContactusComponent,


  },
  {
    path: 'registrarse',
    component:  RegistarseComponent,


  },
];




@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
