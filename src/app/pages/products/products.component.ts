import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/sevices/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  form!:FormGroup;  
  product : any;
  productUpdate:any
  id!:number

  constructor(private productService: ProductService, private route:ActivatedRoute){}

  ngOnInit(){
    this.form = new FormGroup({
      product_name : new FormControl(null,[Validators.required]),
      description : new FormControl(null,[Validators.required]),
      product_price : new FormControl(null,[Validators.required]),
      avg : new FormControl(null,[Validators.required])
    });

    this.getAll();
    this.id = this.route.snapshot.params['id']
    this.productService.getproductById(this.id).subscribe(
      respo => {
        console.log(respo)
        this.productUpdate = respo
      }
    )


    }

    submit(){
      const values = this.form.value;
      console.log(values)
      this.productService.createProduct(values).subscribe( response => {
        console.log(response);
        this.getAll()
      })
    }
    getAll(){
      this.productService.getProduct().subscribe( response => {
        this.product = response;
        console.log(this.product);
  
      })
    }

    delete(id:number){
      this.productService.deleteProduct(id).subscribe( response => {
        console.log(response);
        this.getAll();
      })
    }
    openUpdateModal(products:any){
      this.productUpdate = products;
    }

    update(){
      this.productService.updateProduct(this.id,this.form.value).subscribe(
        response => {
          console.log(response);
        }
      )
    }
  
}
