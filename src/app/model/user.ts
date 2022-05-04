import { Product } from "./product";

export class User {

    constructor (public id:number=0,public fullName:string='',public address:string='',public creditCardNumber:number=0,public products:Product[]=[],public totalPaid:number=0){

    }

}

