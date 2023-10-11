import { UnidadeGestoraDTO } from "./unidade-gestora-dto"

export interface PlanoDTO {
    ano: number;
    descricao: string;
    fases: any[];
    mes: number;
    precatorio: any;
    rps: string;
    rpv: string;
    sequencial: number;
    tipo: string;
    tipoDescricao: string;
    unidadeGestora: UnidadeGestoraDTO;
  }