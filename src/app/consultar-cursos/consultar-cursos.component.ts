import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-consultar-cursos',
  templateUrl: './consultar-cursos.component.html',
  styleUrls: ['./consultar-cursos.component.css']
})
export class ConsultarCursosComponent implements OnInit {

  cursos: any[] = [];
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get(environment.apiUrl + '/cursos').subscribe
      ((data) => {
        this.cursos = data as any[];

      },
        (e) => {
          console.log(e);
        }
      )
  }
  excluir(idCurso: number): void {
    if (window.confirm('Deseja realmente excluir o curso selecionado?')) {
      this.httpClient.delete(environment.apiUrl + "/cursos/" + idCurso,
        { responseType: 'text' })
        .subscribe(
          (data) => {
            alert(data);
            this.ngOnInit();
          },
          (e) => {
            console.log(e);
          }
        )
    }
  }

}

