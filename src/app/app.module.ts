
import { AboutComponent } from './about/about.component';
import { AgendaComponent } from './agenda/agenda.component';
import { AgendaViewerComponent } from './agenda-viewer/agenda-viewer.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FileViewerComponent } from './file-viewer/file-viewer.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AgendaComponent,
    DashboardComponent,
    ProjectsComponent,
    FileViewerComponent,
    LoginComponent,
    AgendaViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
