import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { CartFormComponent } from './cart-form/cart-form.component';
import { UserFormComponent } from './user-form/user-form.component';
import { SuccessComponent } from './success/success.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartService } from '../shared/cart.service';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AppRoutingModule } from '../app-routing.module';
import { CartCardComponent } from './cart/cart-card/cart-card.component';
import { FormsModule } from '@angular/forms';
import { NotfoundComponent } from './notfound/notfound.component';
import { EmptycartComponent } from './cart/emptycart/emptycart.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    
    CartComponent,
    CartFormComponent,
    UserFormComponent,
    SuccessComponent,
    
    NavbarComponent,
    ProductComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CartCardComponent,
    NotfoundComponent,
    EmptycartComponent,
    FooterComponent,
    
  ],
  imports: [
    CommonModule,AppRoutingModule,FormsModule
  ]
  ,
  exports:[
    NavbarComponent,ProductListComponent,CartComponent,ProductDetailsComponent,NotfoundComponent,FooterComponent
  ]
  ,
  providers:[]
})
export class CoreModule { }
