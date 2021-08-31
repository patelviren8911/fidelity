import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
//modules
import { MaterializeModule } from 'src/app/modules/materialize/materialize.module';
import { NgScrollbarModule } from 'ngx-scrollbar';
import {
  NgMaterialMultilevelMenuModule, MultilevelMenuService
} from "ng-material-multilevel-menu";
// components
import { PublicComponent } from './public/public.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    PublicComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MaterializeModule,
    NgScrollbarModule,
    NgMaterialMultilevelMenuModule
  ],
  providers: [MultilevelMenuService],
})
export class PublicModule { }
