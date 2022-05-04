import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartProducts: any = [];
  flag: boolean = true;
  constructor() {}
  isAdded: boolean = false;
  isPurchased:boolean=false;
  isRemoved:boolean=false;
  ngOnInit(): void {}

  addToCart(product: Product) {
    if (this.getProduct(product)) {
      this.changeAmount(product);
    } else {
      this.cartProducts.push(product);
    }

    this.isAdded=true
  }

  getAllProducts() {
    return this.cartProducts;
  }

  getProduct(product: Product) {
    return this.cartProducts.find(
      (cartProduct: Product) => cartProduct.id == product.id
    );
  }

  removeProduct(product: Product) {
    let productIndex = this.cartProducts.findIndex(
      (cartProduct: Product) => cartProduct.id == product.id
    );
    let removed = this.cartProducts.splice(productIndex, 1);
    this.isRemoved=true
  }

  changeAmount(product: Product) {
    console.log(product);

    let newproduct = this.getProduct(product);
    newproduct.amount = product.amount;
    console.log(newproduct);
  }

  getTotalPrice() {
    let totalprice = this.cartProducts.reduce(
      (sum: number, product: Product) => sum + product.price * product.amount,
      0
    );
    console.log(totalprice);

    return totalprice;
  }

  emptyCart():void{
    this.cartProducts=[]
  }

  getIsAdded(): boolean {
    return this.isAdded;
  }

  getPurchased(): boolean {
    return this.isPurchased;
  }

  getisRemoved():boolean{
    return this.isRemoved
  }
}
