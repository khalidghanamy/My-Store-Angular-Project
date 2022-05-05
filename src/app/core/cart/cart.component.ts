import { Component, Input, OnInit,OnChanges,SimpleChanges } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit,OnChanges {

  
  constructor( public cartService:CartService) { }
  
  myCart:any=[]
  totalPrice:number=0
  isRemoved:boolean=false
  ngOnInit(): void {
    this.myCart=this.cartService.getAllProducts()
    
    console.log(this.cartService.getAllProducts());
    
  }

  ngOnChanges(changes:SimpleChanges){
   this.myCart= this.cartService.cartProducts

  }
  
  changeTotalPrice(totalPrice:number){
    this.totalPrice = totalPrice;
  }


  showRemovedAlert(removed:boolean){
    if(removed){
      Swal.fire('Removed successfully')
    }
  }

  changedAmountAlert(changed:boolean){
    if(changed){
      Swal.fire('Changed successfully')
    }
  }

}
