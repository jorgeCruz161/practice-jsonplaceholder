import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { NavbarComponent } from './core/navbar/navbar.component';
import { DetalleUsuarioComponent } from './components/detalle-usuario/detalle-usuario.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { TareasComponent } from './components/tareas/tareas.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    TareasComponent,
    NavbarComponent,
    DetalleUsuarioComponent,
    SpinnerComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    NgbPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
