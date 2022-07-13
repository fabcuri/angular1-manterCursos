import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cadastrar-cursos',
  templateUrl: './cadastrar-cursos.component.html',
  styleUrls: ['./cadastrar-cursos.component.css'],
})
export class CadastrarCursosComponent implements OnInit {
  //atributo para mensagem se gravou com sucesso ou nao
  mensagem: string = '';

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void { }
  //montando a estrutura do formulario
  formCadastro = new FormGroup({
    //campos do formulario
    descricao: new FormControl('', [Validators.required]),
    dataInicio: new FormControl('', [Validators.required]),
    dataTermino: new FormControl('', [Validators.required]),
    idCategoria: new FormControl('', [Validators.required]),

  });
  //acessando o formulário/campos na página HTML
  get form(): any {
    return this.formCadastro.controls;
  }
  //função para fazer a chamada do cadastro na API
  onSubmit(): void {
    this.httpClient
      .post(environment.apiUrl + '/cursos', this.formCadastro.value, {
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
