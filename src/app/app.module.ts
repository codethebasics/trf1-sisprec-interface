import { NgModule } from '@angular/core';
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
import { CanvasComponent } from './canvas/canvas.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatSelectModule } from '@angular/material/select'
import { CustomPaginator } from './canvas/config/CustomPaginatorConfiguration';


@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
    MatSelectModule
  ],
  providers: [
    { provide: MatPaginatorIntl, useValue: CustomPaginator() }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
