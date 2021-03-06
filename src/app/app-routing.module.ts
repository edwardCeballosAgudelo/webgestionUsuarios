import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActualizarUsuarioComponent } from './manager-user/actualizar-usuario/actualizar-usuario.component';
import { AdicionarUsuarioComponent } from './manager-user/adicionar-usuario/adicionar-usuario.component';
import { DetalleUsuarioComponent } from './manager-user/detalle-usuario/detalle-usuario.component';
import { ListaUsuariosComponent } from './manager-user/lista-usuarios/lista-usuarios.component';

const routes: Routes = [
  { path: '',  component: ListaUsuariosComponent },
  { path: 'adduser', component: AdicionarUsuarioComponent },
  { path: 'detailuser/:documento', component: DetalleUsuarioComponent },
  { path: 'updateuser/:documento', component: ActualizarUsuarioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
