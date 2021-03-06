import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CursoFormComponent } from './components/curso-form/curso-form.component';
import { CursoListComponent } from './components/curso-list/curso-list.component';

import {CursoService} from "./services/curso.service";
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CursoFormComponent,
    CursoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CursoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

