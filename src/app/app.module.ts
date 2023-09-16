import { NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableExporterModule } from 'mat-table-exporter';
import { MatSortModule} from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { CanvasComponent } from './canvas/canvas.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatSelectModule } from '@angular/material/select'
import { MatInputModule } from '@angular/material/input'
import { MatListModule } from '@angular/material/list';
import { MatTreeModule } from '@angular/material/tree';
import { CustomPaginator } from './canvas/config/CustomPaginatorConfiguration';
import { ConsultaFaseComponent } from './cjf/consulta-fase/consulta-fase.component';
import { ConsultaTabelaComponent } from './cjf/consulta-tabela/consulta-tabela.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PulseComponent } from './shared/pulse/pulse.component';
import { DynamicTableComponent } from './shared/dynamic-table/dynamic-table.component';
import { TabelaAssuntoComponent } from './cjf/consulta-tabela/tabela-assunto/tabela-assunto.component';
import { TabelaUnidadeJudicialComponent } from './cjf/consulta-tabela/tabela-unidade-judicial/tabela-unidade-judicial.component';
import { TabelaUnidadeComponent } from './cjf/consulta-tabela/tabela-unidade/tabela-unidade.component';
import { TabelaClassificacaoDespesaComponent } from './cjf/consulta-tabela/tabela-classificacao-despesa/tabela-classificacao-despesa.component';
import { TabelaIndiceComponent } from './cjf/consulta-tabela/tabela-indice/tabela-indice.component';
import { TabelaIndiceTipoComponent } from './cjf/consulta-tabela/tabela-indice-tipo/tabela-indice-tipo.component';
import { TabelaBeneficiarioTipoComponent } from './cjf/consulta-tabela/tabela-beneficiario-tipo/tabela-beneficiario-tipo.component';
import { TabelaBeneficiarioSucessaoTipoComponent } from './cjf/consulta-tabela/tabela-beneficiario-sucessao-tipo/tabela-beneficiario-sucessao-tipo.component';
import { TabelaBeneficiarioValorOrdemPagamentoComponent } from './cjf/consulta-tabela/tabela-beneficiario-valor-ordem-pagamento/tabela-beneficiario-valor-ordem-pagamento.component';
import { TabelaServidorCondicaoTipoComponent } from './cjf/consulta-tabela/tabela-servidor-condicao-tipo/tabela-servidor-condicao-tipo.component';
import { TabelaFaseTipoComponent } from './cjf/consulta-tabela/tabela-fase-tipo/tabela-fase-tipo.component';
import { TabelaIdentificacaoTipoComponent } from './cjf/consulta-tabela/tabela-identificacao-tipo/tabela-identificacao-tipo.component';
import { TabelaMovimentoTipoComponent } from './cjf/consulta-tabela/tabela-movimento-tipo/tabela-movimento-tipo.component';
import { TabelaSentencaTipoComponent } from './cjf/consulta-tabela/tabela-sentenca-tipo/tabela-sentenca-tipo.component';
import { TabelaUnidadeJudicialTipoComponent } from './cjf/consulta-tabela/tabela-unidade-judicial-tipo/tabela-unidade-judicial-tipo.component';
import { TabelaValorTipoComponent } from './cjf/consulta-tabela/tabela-valor-tipo/tabela-valor-tipo.component';
import { TabelaDivergenciaTipoComponent } from './cjf/consulta-tabela/tabela-divergencia-tipo/tabela-divergencia-tipo.component';
import { registerLocaleData } from '@angular/common';

import { TextMaskModule } from 'angular2-text-mask';

import localePt from '@angular/common/locales/pt';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { StatusBarComponent } from './layout/status-bar/status-bar.component';
import { BreadcrumbComponent } from './layout/breadcrumb/breadcrumb.component';
import { ProcessosComponent } from './cjf/processos/processos.component';
import { LoadingInterceptor } from './shared/loading-interceptor';
import { HomeComponent } from './system/home/home.component';
import { MessageComponent } from './shared/message/message.component';
registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
    ConsultaFaseComponent,
    ConsultaTabelaComponent,
    PulseComponent,
    DynamicTableComponent,
    TabelaAssuntoComponent,
    TabelaUnidadeJudicialComponent,
    TabelaUnidadeComponent,
    TabelaClassificacaoDespesaComponent,
    TabelaIndiceComponent,
    TabelaIndiceTipoComponent,
    TabelaBeneficiarioTipoComponent,
    TabelaBeneficiarioSucessaoTipoComponent,
    TabelaBeneficiarioValorOrdemPagamentoComponent,
    TabelaServidorCondicaoTipoComponent,
    TabelaFaseTipoComponent,
    TabelaIdentificacaoTipoComponent,
    TabelaMovimentoTipoComponent,
    TabelaSentencaTipoComponent,
    TabelaUnidadeJudicialTipoComponent,
    TabelaValorTipoComponent,
    TabelaDivergenciaTipoComponent,
    SidebarComponent,
    StatusBarComponent,
    BreadcrumbComponent,
    ProcessosComponent,
    HomeComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatTableExporterModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSelectModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatListModule,
    MatInputModule,
    MatTreeModule,
    TextMaskModule,
    MatSnackBarModule
  ],
  providers: [
    { provide: MatPaginatorIntl, useValue: CustomPaginator() },
    { provide: LOCALE_ID, useValue: 'pt' }, // Configurando idioma
    { provide:  DEFAULT_CURRENCY_CODE, useValue: 'BRL' }, // Configurando moeda,
    { 
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
