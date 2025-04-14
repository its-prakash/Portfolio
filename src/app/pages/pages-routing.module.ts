import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducationComponent } from './education/education.component';
import { ContectComponent } from './contect/contect.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },
  { path: 'about', component: AboutComponent, data: { title: 'about' } },
  { path: 'projects', component: ProjectsComponent, data: { title: 'Projects' } },
  { path: 'education', component: EducationComponent, data: { title: 'Education' } },
  { path: 'contect', component: ContectComponent, data: { title: 'Contect' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
