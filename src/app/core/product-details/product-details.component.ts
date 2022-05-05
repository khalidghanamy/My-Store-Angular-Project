import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/model/product';
import { HttpService } from 'src/app/services/http.service';
import { ActivatedRoute,ParamMap } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';
import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit,OnChanges {

  myproduct:any
  id:any
  constructor(private http:HttpService,private router:ActivatedRoute , private cartService:CartService) { }
  ngOnChanges(): void {
    this.myproduct.amount
  }

  ngOnInit(): void {
    this.router.paramMap.subscribe((param:ParamMap)=>{
      this.id =param.get('id')

      
    })
    this.http.getProduct(this.id).subscribe(data=>{
      this.myproduct=data
    })
    
    
  }
  addToCart(product:any){    
    product.amount=this.myproduct.amount
    this.cartService.addToCart(product)
    this.showAlert()
  }

  showAlert(){
    let isAdded=this.cartService.getIsAdded()
    if (isAdded){
      Swal.fire('added successfully')
    }
  }
 
}
