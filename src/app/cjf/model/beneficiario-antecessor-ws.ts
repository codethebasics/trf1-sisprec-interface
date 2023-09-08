import { PessoaWS } from "./pessoa-ws";

export interface BeneficiarioAntecessorWS {
    id?: number,
    originario?: String;
    pessoa?: PessoaWS;
    registroData?: String;
    seq_beneficiario?: number;
    sequencial?: number;
    sucessaoData?: String;
}