import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { products } from 'src/app/sevices/Product/product';
import { ProductService } from 'src/app/sevices/Product/product.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit{
  
product: products = new products();

  Id:any;

  constructor(private product_services: ProductService, 
    private route: ActivatedRoute,
     private router: Router) {}

  ngOnInit(): void {
    this.Id = this.route.snapshot.params['product_Id'];
    this.product_services.getproductById(this.Id).subscribe(data=>{
      this.product=data;
      console.log(data)
    });
  }



  updateProduct(){
    this.product_services.updateProduct(this.Id,this.product).subscribe( data => {
      // console.log(response);
      Swal.fire({
        title: 'success!',
        text: 'Item Added successfully.',
        icon: 'success'  
      });
      this.router.navigate(['home/product']);
      this.getAll()
    })
  }
  getAll() {
    throw new Error('Method not implemented.');
  }

  
}
