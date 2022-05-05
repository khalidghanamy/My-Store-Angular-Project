import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { HttpService } from 'src/app/services/http.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:Product[]=[]
  constructor(private http:HttpService) { }

  ngOnInit(): void {
    this.http.getAllProducts().subscribe(response=>{
      this.products=response
      
    })
  }

  showAddedAlert(added:boolean){
    if (added){
      Swal.fire('added successfully')
    }
    
  }

  

}
