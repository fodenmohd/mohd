import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './default/nav-bar/nav-bar.component';
import { DarshbourdComponent } from './pages/darshbourd/darshbourd.component';
import { ItemComponent } from './pages/item/item.component';
import { ProductsComponent } from './pages/products/products.component';
import { CostProductionComponent } from './pages/cost-production/cost-production.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { ProductProducedComponent } from './pages/product-produced/product-produced.component';
import { MainComponent } from './default/main/main.component';
import { LoginComponentComponent } from './pages/login/login-component/login-component.component';
import { UpdateProductComponent } from './pages/update-product/update-product.component';
import { UpdateItemComponent } from './pages/update-item/update-item.component';

const routes: Routes = [
  {path:'',component:LoginComponentComponent},
   {path:'home',component:NavBarComponent, children:
   [
    {path:'',component:DarshbourdComponent},
    {path:'items',component:ItemComponent},
    {path:'product',component:ProductsComponent},
    {path:'cost_of_product',component:CostProductionComponent},
    {path:'product_produce',component:ProductProducedComponent},
    {path:'report',component:ReportsComponent},
    {path:'update-products/:product_Id', component:UpdateProductComponent},
    {path:'update-item/:item_Id',component:UpdateItemComponent}
  ]
},
  {path:'main',component:MainComponent}
 
];
// const routes: Routes = [
//   {
//     path: '',
//     component: NavBarComponent,
//     children: [
//       { path: '', component: DarshbourdComponent },
//       { path: 'items', component: ItemComponent },
//       { path: 'product', component: ProductsComponent },
//       { path: 'cost_of_product', component: CostProductionComponent },
//       { path: 'product_produce', component: ProductProducedComponent },
//       { path: 'report', component: ReportsComponent },
//     ],
//   },
//   { path: 'main', component: MainComponent },
// ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
