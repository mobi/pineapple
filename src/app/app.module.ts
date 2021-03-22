import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { DemoMaterialModule } from './modules/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GoToasterModule } from '@tangoe/goponents';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DemoMaterialModule,
    FormsModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    NgbModule,
    GoToasterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
