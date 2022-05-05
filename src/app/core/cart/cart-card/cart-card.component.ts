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
  @Output() showChangedAmountAlert:EventEmitter<boolean>=new EventEmitter();
  constructor(private cartService:CartService ) { }

  ngOnInit(): void {
   this.updateTotalPrice()

  }

  ngOnChanges(){
   

  }

  removeProduct(product:Product){
    this.cartService.removeProduct(product)
   this.updateTotalPrice()
   this.showRemovedAlert()
    
  }

  changeAmount(product:Product){
    this.cartService.changeAmount(product)

   this.updateTotalPrice()
   this.showAlertAmountChanged()

  }
  
  updateTotalPrice(){

    let totalPrice = this.cartService.getTotalPrice()
    this.emitPrice.emit(totalPrice)
  }

  showRemovedAlert(){
    let isAdded=this.cartService.getIsAdded()
    this.showAlertRemoved.emit(isAdded)
  }

  showAlertAmountChanged(){
    let isChanged=this.cartService.getIsChanged()
    this.showChangedAmountAlert.emit(isChanged)
  }

}
