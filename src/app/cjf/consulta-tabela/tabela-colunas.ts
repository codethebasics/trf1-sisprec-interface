export const colunasAssunto = [
    'codigo',
    'descricao',
    'codigoCnj',
    'descricaoCnj',
    'dataAtualizacao',
    'sequencial'
];

export const colunasUnidadeJudicial = [
    'codigo',
    'descricao',
    'utilizacaoInicioData',
    'utilizacaoFimData',
    'registroData',
    'municipio',
    'sequencial'
];

export const colunasUnidade = [
    'codigo',
    'nome',
    'abreviatura',
    'utilizacaoInicioData',
    'utilizacaoFimData',
    'unidadeSuperior',
    'sequencial'
];

export const colunasClassificacaoDespesa = [
    'naturezaDespesaDescricao',
    'despesaTipoCodigo',
    'despesaTipoDescricao',
    'alimentar',
    'despesaTipoSequencial',
    'naturezaDespesaSequencial',
    'utilizacaoInicioData',
    'utilizacaoFimData',
    'naturezaDespesaCodigo',
    'sequencial'
];

export const colunasIndice = [
    'indiceTipo',
    'registro',
    'validadeInicio',
    'validadeFim',
    'ano',
    'mes',
    'valor',
    'sequencial'
];

export const colunasIndiceTipo = [
    'codigo',
    'descricao',
    'usoCodigo',
    'sequencial'
];

export const colunasBeneficiarioTipo = [
    'codigo',
    'descricao',
    'utilizacaoFim',
    'sequencial'
];

export const colunasBeneficiarioSucessaoTipo = [
    'tipo'
];

export const colunasBeneficiarioValorOrdemPagamento107ATipo = [
    'descricao',
    'codigo',
    'utilizacaoFim',
    'observacao',
    'sequencial'
];

export const colunasServidorCondicaoTipo = [
    'codigo',
    'descricao',
    'utilizacaoFim',
    'sequencial'
];

export const colunasFaseTipo = [
    'codigo',
    'descricao',
    'origem',
    'utilizacaoFim',
    'observacao',
    'parcelaNumero',
    'sequencial'
];

export const colunasIdentificacaoTipo = [
    'codigo',
    'descricao',
    'utilizacaoFim',
    'sequencial'
];

export const colunasMovimentoTipo = [
    'codigo',
    'descricao',
    'utilizacaoFim',
    'sequencial'
];

export const colunasSentencaTipo = [
    'codigo',
    'descricao',
    'codigoPctRpv',
    'codigoAccess',
    'utilizacaoFim',
    'sequencial'
];

export const colunasUnidadeJudicialTipo = [
    'codigo',
    'descricao',
    'utilizacaoFim',
    'natureza',
    'sequencial'
];

export const colunasValorTipo = [
    'codigo',
    'descricao',
    'observacao',
    'utilizacaoFim',
    'processoBeneficiarioCodigo',
    'contextoUtilizacaoCodigo',
    'sequencial'
];

export const colunasDivergenciaTipo = [
    'codigo',
    'contexto',
    'motivo'
];

export default {
    colunasAssunto,
    colunasUnidadeJudicial,
    colunasUnidade,
    colunasClassificacaoDespesa,
    colunasIndice,
    colunasIndiceTipo,
    colunasBeneficiarioTipo,
    colunasBeneficiarioSucessaoTipo,
    colunasBeneficiarioValorOrdemPagamento107ATipo,
    colunasServidorCondicaoTipo,
    colunasFaseTipo,
    colunasIdentificacaoTipo,
    colunasMovimentoTipo,
    colunasSentencaTipo,
    colunasUnidadeJudicialTipo,
    colunasValorTipo,
    colunasDivergenciaTipo
}