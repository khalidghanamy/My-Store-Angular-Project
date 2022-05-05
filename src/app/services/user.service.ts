import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users:User[]=[]
  isPurchased:boolean=false
  constructor() { }

  addNewUser(user:User){
    this.users.push(user)

    this.isPurchased=true
  }

  getisPurchased():boolean{
    return this.isPurchased
  }

 

}
