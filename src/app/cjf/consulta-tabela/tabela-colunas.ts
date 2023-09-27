export const colunasAssunto = [
    'select',
    'codigo',
    'descricao',
    'codigoCnj',
    'descricaoCnj',
    'dataAtualizacao',
    'sequencial'
];

export const colunasUnidadeJudicial = [
    'select',
    'codigo',
    'descricao',
    'utilizacaoInicioData',
    'utilizacaoFimData',
    'registroData',
    'municipio',
    'sequencial'
];

export const colunasUnidade = [
    'select',
    'codigo',
    'nome',
    'abreviatura',
    'utilizacaoInicioData',
    'utilizacaoFimData',
    'unidadeSuperior',
    'sequencial'
];

export const colunasClassificacaoDespesa = [
    'select',
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
    'select',
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
    'select',
    'codigo',
    'descricao',
    'usoCodigo',
    'sequencial'
];

export const colunasBeneficiarioTipo = [
    'select',
    'codigo',
    'descricao',
    'utilizacaoFim',
    'sequencial'
];

export const colunasBeneficiarioSucessaoTipo = [
    'select',
    'tipo'
];

export const colunasBeneficiarioValorOrdemPagamento107ATipo = [
    'select',
    'descricao',
    'codigo',
    'utilizacaoFim',
    'observacao',
    'sequencial'
];

export const colunasServidorCondicaoTipo = [
    'select',
    'codigo',
    'descricao',
    'utilizacaoFim',
    'sequencial'
];

export const colunasFaseTipo = [
    'select',
    'codigo',
    'descricao',
    'origem',
    'utilizacaoFim',
    'observacao',
    'parcelaNumero',
    'sequencial'
];

export const colunasIdentificacaoTipo = [
    'select',
    'codigo',
    'descricao',
    'utilizacaoFim',
    'sequencial'
];

export const colunasMovimentoTipo = [
    'select',
    'codigo',
    'descricao',
    'utilizacaoFim',
    'sequencial'
];

export const colunasSentencaTipo = [
    'select',
    'codigo',
    'descricao',
    'codigoPctRpv',
    'codigoAccess',
    'utilizacaoFim',
    'sequencial'
];

export const colunasUnidadeJudicialTipo = [
    'select',
    'codigo',
    'descricao',
    'utilizacaoFim',
    'natureza',
    'sequencial'
];

export const colunasValorTipo = [
    'select',
    'codigo',
    'descricao',
    'observacao',
    'utilizacaoFim',
    'processoBeneficiarioCodigo',
    'contextoUtilizacaoCodigo',
    'sequencial'
];

export const colunasDivergenciaTipo = [
    'select',
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