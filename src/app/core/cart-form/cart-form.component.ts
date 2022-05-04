import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.css']
})
export class CartFormComponent implements OnInit {

  
    fullName:string='';
    address:string='';
    creditCardNumber:number=0;

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(){
    const user={
      fullName:this.fullName,
      address:this.address,
      creditCardNumber:this.creditCardNumber

      
    }

    console.log(user);
    

  }
}
