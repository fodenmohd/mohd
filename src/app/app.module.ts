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
import { ReportsComponent } from './pages/reports/reports.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { DatePipe } from '@angular/common'; // Import the DatePipe
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponentComponent } from './pages/login/login-component/login-component.component';
import { UpdateProductComponent } from './pages/update-product/update-product.component';
import { UpdateItemComponent } from './pages/update-item/update-item.component';
import { ProductProducedComponent } from './pages/product-produced/product-produced.component';
import { CostProductionComponent } from './pages/cost-production/cost-production.component';
// import { DialogComponent } from './dialog/dialog.component';
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
    ProductProducedComponent,
    LoginComponentComponent,
    UpdateProductComponent,
    UpdateItemComponent,
    


  ],
  imports: [
    ReactiveFormsModule,FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatFormFieldModule,MatSelectModule,DatePipe,CommonModule ,
    MatButtonModule,
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
