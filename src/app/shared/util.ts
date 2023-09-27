export default class Util {
    static getProcessoMask(): any[] {
        return [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/, '.', /\d/, '.', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
    }

    static getPlanoAnoMesMask(): any[] {
        return [/\d/, /\d/, /\d/, /\d/, '/', /\d/, /\d/];
    }

    static mask__yyyy_MM_dd_hh_mm_ss(): any[] {
        return [/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/,'-', /\d/, /\d/,' ',/\d/, /\d/,':',/\d/, /\d/,':',/\d/, /\d/];
    }

    static getUnidadesGestoras(): string[] {
        return [
            '090049', 
            '090028', 
            '090048', 
            '090029', 
            '090047', 
            '090030', 
            '090051', 
            '090031', 
            '090052', 
            '090027'
        ]; 
    }

    static stripProcesso(processo: string): string {
        return processo
            .replaceAll('-', '')
            .replaceAll('.', '');
    }

    static maskProcesso(processo: string): string {
        const sanitizedProcesso = this.stripProcesso(processo);
        return sanitizedProcesso;
    }
}
