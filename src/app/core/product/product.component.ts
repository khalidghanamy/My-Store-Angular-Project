import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/shared/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

 @Input('myproduct') myproduct:any
 @Output() addedSuccessfully:EventEmitter<boolean>=new EventEmitter();
  constructor(public cartService:CartService) { }

  ngOnInit(): void {
    
  }


  addToCart(product:Product){
    this.cartService.addToCart(product)

    this. showAlert()
  }

  showAlert(){
    let isAdded=this.cartService.getIsAdded()
    this.addedSuccessfully.emit(isAdded)
  }
 


}
