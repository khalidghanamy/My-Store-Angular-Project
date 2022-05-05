import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.css']
})
export class CartCardComponent implements OnInit,OnChanges {

  @Input() myCartProduct:any

  @Output() emitPrice:EventEmitter<number>=new EventEmitter();
  @Output() showAlertRemoved:EventEmitter<boolean>=new EventEmitter();
  constructor(private cartService:CartService ) { }

  ngOnInit(): void {
   this.updateTotalPrice()

  }

  ngOnChanges(){
   

  }

  removeProduct(product:Product){
    this.cartService.removeProduct(product)
    console.log('done');
   this.updateTotalPrice()
   this.showRemovedAlert()
    
  }

  changeAmount(product:Product){
    this.cartService.changeAmount(product)

   this.updateTotalPrice()

  }
  
  updateTotalPrice(){

    let totalPrice = this.cartService.getTotalPrice()
    this.emitPrice.emit(totalPrice)
  }

  showRemovedAlert(){
    let isAdded=this.cartService.getIsAdded()
    this.showAlertRemoved.emit(isAdded)
  }

}
