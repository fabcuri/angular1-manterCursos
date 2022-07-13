import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cadastrar-categorias',
  templateUrl: './cadastrar-categorias.component.html',
  styleUrls: ['./cadastrar-categorias.component.css'],
})
export class CadastrarCategoriasComponent implements OnInit {
  //atributo para mensagem se gravou com sucesso ou nao
  mensagem: string = '';

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void { }
  //montando a estrutura do formulario
  formCadastro = new FormGroup({
    //campos do formulario
    tipo: new FormControl('', [Validators.required]),


  });
  //acessando o formulário/campos na página HTML
  get form(): any {
    return this.formCadastro.controls;
  }
  //função para fazer a chamada do cadastro na API
  onSubmit(): void {
    this.httpClient
      .post(environment.apiUrl + '/categorias', this.formCadastro.value, {
        responseType: 'text',
      })
      .subscribe(
        (data) => {
          this.mensagem = data;
          this.formCadastro.reset();
        },
        (e) => {
          this.mensagem = 'Erro ao cadastrar';
          console.log(e);
        }
      );
  }
}
