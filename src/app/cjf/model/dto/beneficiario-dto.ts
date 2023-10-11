import { AcaoOriginariaDTO } from "./acao-originaria-dto";
import { AdvogadoDTO } from "./advogado-dto";
import { AssuntoDTO } from "./assunto-dto";
import { BeneficiarioTipoDTO } from "./beneficiario-tipo-dto";
import { ContaBancariaDTO } from "./conta-bancaria-dto";
import { IdentificacaoTipoDTO } from "./identificacao-tipo-dto";
import { MovimentoTipoDTO } from "./movimento-tipo-dto";
import { PessoaDTO } from "./pessoa-dto";
import { ValorDTO } from "./valor-dto";

export interface BeneficiarioDTO {
    advogadoCausa: boolean;
    antecessores: any[];
    beneficiarioTipo: BeneficiarioTipoDTO;
    cancelamentoData: string;
    codigoBeneficiarioCompensacaoGPS: string;
    compensacaoData: string;
    competenciaExpedicaoAno: number;
    condicaoServidorTipo: any;
    contaBancaria: ContaBancariaDTO;
    exercicioAnteriorNumeroMeses: number;
    exercicioCorrenteNumeroMeses: number;
    identificacaoTipo: IdentificacaoTipoDTO;
    intimacaoData: string;
    isentoIRRF: boolean;
    movimentoTipo: MovimentoTipoDTO;
    nascimentoData: string;
    pessoa: PessoaDTO;
    portadorDeficiencia: boolean;
    portadorDoencaGrave: boolean;
    registroData: string;
    sequencial: number;
    sucessaoTipo: any;
    unidadeLotacao: any;
    valores: ValorDTO[];
}