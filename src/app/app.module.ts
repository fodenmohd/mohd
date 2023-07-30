import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './default/nav-bar/nav-bar.component';
import { MainComponent } from './default/main/main.component';
import { AssideComponent } from './default/asside/asside.component';
import { DarshbourdComponent } from './pages/darshbourd/darshbourd.component';
import { ItemComponent } from './pages/item/item.component';
import { ProductsComponent } from './pages/products/products.component';
import { CostProductionComponent } from './pages/cost-production/cost-production.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { ProductProducedComponent } from './pages/product-produced/product-produced.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { DatePipe } from '@angular/common'; // Import the DatePipe
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainComponent,
    AssideComponent,
    DarshbourdComponent,
    ItemComponent,
    ProductsComponent,
    CostProductionComponent,
    ReportsComponent,
    ProductProducedComponent
    


  ],
  imports: [
    ReactiveFormsModule,FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatFormFieldModule,MatSelectModule,DatePipe,CommonModule ,
    MatButtonModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
