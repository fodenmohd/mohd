import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductItemService } from 'src/app/sevices/product-item.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  
  form!:FormGroup;  
  product_item : any;
  productUpdate:any
  id!:number

  constructor(private productItem: ProductItemService, private router: Router){}

  ngOnInit(){
    this.form = new FormGroup({
      product_name : new FormControl(null,[Validators.required]),
      price : new FormControl(null,[Validators.required]),
    });

    }

    submit(){
      const values = this.form.value;
      console.log(values)
      this.productItem.addProductItem(values).subscribe( response => {
        console.log(response);
        this.getAll()
      })
    }
    getAll(){
      this.productItem.getProductItemList().subscribe( response => {
        this.product_item = response;
        console.log(this.product_item);
  
      })
    }

    // delete(id:number){
    //   this.productService.deleteProduct(id).subscribe( response => {
    //     console.log(response);
    //     this.getAll();
    //   })
    // }
    // openUpdateModal(products:any){
    //   this.productUpdate = products;
    // }

    // update(){
    //   this.productService.updateProduct(this.id,this.form.value).subscribe(
    //     response => {
    //       console.log(response);
    //     }
    //   )
    // }
    // printTable() {
    //   let DATA: any = document.getElementById('htmlData');
    //     html2canvas(DATA).then((canvas) => {
    //       let fileWidth = 208;
    //       let fileHeight = (canvas.height * fileWidth) / canvas.width;
    //       const FILEURI = canvas.toDataURL('image/png');
    //       let PDF = new jsPDF('p', 'mm', 'a4');
    //       let position = 0;
    //       PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
    //       PDF.save('angular-demo.pdf');
    //     });
    // }

    
    // this.getAll();
    // this.id = this.route.snapshot.params['id']
    // this.productItem.getProductItemById(this.id).subscribe(
    //   respo => {
    //     console.log(respo)
    //     this.productUpdate = respo
    //   }
    // )

}
