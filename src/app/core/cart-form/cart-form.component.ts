import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { User } from 'src/app/model/user';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.css']
})
export class CartFormComponent implements OnInit {

  
    user:User=new User()
   isPurchased:boolean=false
  constructor(private userService:UserService,private cartService:CartService) { }

  ngOnInit(): void {
  }

  submitForm(user:User){
  user.totalPaid=this.cartService.getTotalPrice()
  user.products=this.cartService.getAllProducts()
  this.userService.addNewUser(user)
  console.log(user);
  this.isPurchased=true
  this.showPurchaseAlert()
  this.emptyMyCart()
  }


  showPurchaseAlert(){
    if(this.userService.getisPurchased()){
      Swal.fire(
        `${this.user.fullName}
        <br/>
        ${this.user.address}
        <br/>
        ${this.user.totalPaid}
        `
      )
    }
  }

  emptyMyCart(){
    this.cartService.emptyCart()
  }
}
