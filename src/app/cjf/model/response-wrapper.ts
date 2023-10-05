import { Paginacao } from "./paginacao";

export interface ResponseWrapper<T> {
    // httpStatus: String;
    // statusCode: number;
    // mensagens: String[];
    // paginacao: Paginacao;
    // retorno: T;
    code: number;
    status: string;
    messages: string;
    result: T;
}