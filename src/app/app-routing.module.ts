import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './core/cart/cart.component';
import { EmptycartComponent } from './core/cart/emptycart/emptycart.component';
import { FooterComponent } from './core/footer/footer.component';
import { NotfoundComponent } from './core/notfound/notfound.component';
import { ProductDetailsComponent } from './core/product-details/product-details.component';
import { ProductListComponent } from './core/product-list/product-list.component';

const routes: Routes = [
  {path:'',component:ProductListComponent},
  {path:'cart',component:CartComponent},
  {path:'product/:id',component:ProductDetailsComponent},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }