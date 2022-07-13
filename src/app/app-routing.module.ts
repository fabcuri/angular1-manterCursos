
import { AppComponent } from './app.component';
import { CadastrarCursosComponent } from './cadastrar-cursos/cadastrar-cursos.component';
import { ConsultarCursosComponent } from './consultar-cursos/consultar-cursos.component';
import { EditarCursosComponent } from './editar-cursos/editar-cursos.component';
import { CadastrarCategoriasComponent } from './cadastrar-categorias/cadastrar-categorias.component';
import { ConsultarCategoriasComponent } from './consultar-categorias/consultar-categorias.component';
import { EditarCategoriasComponent } from './editar-categorias/editar-categorias.component';
import { ConsultarCursocategoriasComponent } from './consultar-cursocategorias/consultar-cursocategorias.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
  { path: 'cadastrar-categorias', component: CadastrarCategoriasComponent },
  { path: 'consultar-categorias', component: ConsultarCategoriasComponent },
  { path: 'editar-categorias/:id', component: EditarCategoriasComponent },
  { path: 'cadastrar-cursos', component: CadastrarCursosComponent },
  { path: 'consultar-cursos', component: ConsultarCursosComponent },
  { path: 'app.component', component: AppComponent },
  { path: 'editar-cursos/:id', component: EditarCursosComponent },
  { path: 'consultar-cursocategorias', component: ConsultarCursocategoriasComponent },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
