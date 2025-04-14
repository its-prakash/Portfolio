import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContectComponent } from './contect/contect.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { EducationComponent } from './education/education.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ContectComponent,
    ProjectCardComponent,
    EducationComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  exports:[
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ContectComponent,
    ProjectCardComponent,
    EducationComponent
  ]
})
export class PagesModule { }
