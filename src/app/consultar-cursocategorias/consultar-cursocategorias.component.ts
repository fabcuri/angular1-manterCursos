import { Component, OnInit } from '@angular/core';
import { Curso } from '../model/curso';
import { ConsultarCursocategoriasService } from './services/consultaCursocategorias';

@Component({
  selector: 'app-consultar-cursocategorias',
  templateUrl: './consultar-cursocategorias.component.html',
  styleUrls: ['./consultar-cursocategorias.component.css']
})
export class ConsultarCursocategoriasComponent implements OnInit {
  cursos: Curso[] = [];
  idCategoria!: number;
  tipo!: string;

  constructor(private consultacursosservice: ConsultarCursocategoriasService) { }

  ngOnInit(): void {
  }
  buscarCursos() {
    this.consultacursosservice.consultaCursos(this.idCategoria).subscribe((resposta) => {
      this.cursos = resposta;
    
    });
  }
}




