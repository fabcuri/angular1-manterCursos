import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-consultar-categorias',
  templateUrl: './consultar-categorias.component.html',
  styleUrls: ['./consultar-categorias.component.css']
})
export class ConsultarCategoriasComponent implements OnInit {

  categorias: any[] = [];
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get(environment.apiUrl + '/categorias').subscribe
      ((data) => {
        this.categorias = data as any[];

      },
        (e) => {
          console.log(e);
        }
      )
  }
  excluir(idCategoria: number): void {
    if (window.confirm('Deseja realmente excluir a categoria selecionada?')) {
      this.httpClient.delete(environment.apiUrl + "/categorias/" + idCategoria,
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
