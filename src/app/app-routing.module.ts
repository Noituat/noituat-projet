import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AgendaComponent } from './agenda/agenda.component';
import { ProjectsComponent } from './projects/projects.component';
import { FileViewerComponent } from './file-viewer/file-viewer.component';
import { LoginComponent } from './login/login.component';


import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'planning', component: AgendaComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'files', component: FileViewerComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
