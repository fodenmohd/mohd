import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Swal from 'sweetalert2';
import { ProductService } from 'src/app/sevices/Product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
printTable() {
throw new Error('Method not implemented.');
}
  form!:FormGroup;  
  product : any;
  productUpdate:any
  id!:number



  constructor(private productService: ProductService, private route: ActivatedRoute, private router:Router) {}

  ngOnInit() {
    this.form = new FormGroup({
      product_name: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      product_price: new FormControl(null, [Validators.required]),
      avg: new FormControl(null, [Validators.required]),
      isUsed: new FormControl(null, [Validators.required])
    });

    this.getAll();
    this.id = this.route.snapshot.params['id'];
    this.productService.getproductById(this.id).subscribe(
      respo => {
        console.log(respo);
        this.productUpdate = respo;
      }
    );
  }

  submit() {
    const values = this.form.value;
    console.log(values);
    this.productService.createProduct(values).subscribe(response => {
      console.log(response);
      this.getAll();
      Swal.fire({
        title: 'Success!',
        text: 'Product Added successfully.',
        icon: 'success'
      });
    });
  }

  getAll() {
    this.productService.getProduct().subscribe(response => {
      this.product = response;
      console.log(this.product);
    });
  }

  delete(id: number) {
    this.productService.deleteProduct(id).subscribe(response => {
      console.log(response);
      this.getAll();
    });
  }

  openUpdateModal(products: any) {
    this.productUpdate = products;
  }

  updateProduct(product_Id: number){
    this.router.navigate(['home/update-products',product_Id])
  }




  futa(id: number) {
    // Store the outer this context
    const outerThis = this;



  
    // Show a confirmation dialog before deleting
    Swal.fire({
      title: 'Confirm',
      text: 'Are you sure you want to delete this item?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel'
    }).then(result => {
      if (result.isConfirmed) {
        // Use the stored outer this context
        outerThis.productService.deleteProduct(id).subscribe(
          response => {
            console.log(response);
            Swal.fire({
              title: 'Success!',
              text: 'Product deleted successfully.',
              icon: 'success'
            });
            outerThis.getAll();
          },
          error => {
            Swal.fire({
              title: 'Error!',
              text: 'Failed to delete Product.',
              icon: 'error'
            });
          }
        );
      }
    });

//print
 this.printTable() 
  let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('angular-demo.pdf');
    });
}

}