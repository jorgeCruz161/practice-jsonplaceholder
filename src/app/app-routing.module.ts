import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { TareasComponent } from './components/tareas/tareas.component';
import { DetalleUsuarioComponent } from './components/detalle-usuario/detalle-usuario.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'tareas', component: TareasComponent },
  { path: 'detalle-usuario/:id', component: DetalleUsuarioComponent }, 
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
