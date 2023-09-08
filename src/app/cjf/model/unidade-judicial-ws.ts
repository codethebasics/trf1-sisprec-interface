import { MunicipioWS } from './municipio-ws';

export interface UnidadeJudicialWS {
    id?: number,
    sequencial?: number;
    codigo?: String;
    descricao?: String;
    utilizacaoInicioData?: String;
    utilizacaoFimData?: String;
    registroData?: String;
    municipio?: MunicipioWS;
}