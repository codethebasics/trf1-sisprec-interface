export interface UnidadeSuperiorWS {
   id?: number,
   sequencial?: number;
   codigo?: String;
   nome?: String;
   abreviatura?: String;
   utilizacaoInicioData?: String;
   utilizacaoFimData?: String;
   unidadeSuperior?: UnidadeSuperiorWS;
}