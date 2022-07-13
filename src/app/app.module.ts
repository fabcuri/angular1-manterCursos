import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarCursosComponent } from './cadastrar-cursos/cadastrar-cursos.component';
import { ConsultarCursosComponent } from './consultar-cursos/consultar-cursos.component';
import { EditarCursosComponent } from './editar-cursos/editar-cursos.component';
import { CadastrarCategoriasComponent } from './cadastrar-categorias/cadastrar-categorias.component';
import { ConsultarCategoriasComponent } from './consultar-categorias/consultar-categorias.component';
import { EditarCategoriasComponent } from './editar-categorias/editar-categorias.component';
import { ConsultarCursocategoriasComponent } from './consultar-cursocategorias/consultar-cursocategorias.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CadastrarCursosComponent,
    ConsultarCursosComponent,
    EditarCursosComponent,
    CadastrarCategoriasComponent,
    ConsultarCategoriasComponent,
    EditarCategoriasComponent,
    ConsultarCursocategoriasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
