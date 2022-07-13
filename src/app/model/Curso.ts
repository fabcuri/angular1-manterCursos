import { Categoria } from "./Categoria";

export interface Curso {
    idCurso:number;
    descricao:string;
    dataInicio:Date;
    dataTermino:Date;
    categoria:Categoria;
}