import { IndiceTipoWS } from './indice-tipo-ws'

export interface IndiceWS {
    id?: number;
    indiceTipo?: String;
    numero?: String;
    registro: number;
    validadeInicio?: IndiceTipoWS;
    validadeFim?: IndiceTipoWS[];
    ano?: number;
    mes?: number;
    valor?: number;
}
