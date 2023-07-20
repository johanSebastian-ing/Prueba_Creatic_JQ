import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [HomeComponent],
    exports: [HomeComponent],
    imports: [ AppRoutingModule,RouterModule.forRoot([]),

    ],
  })
  export class clientsReguisterHomeModule {}
