import { DatePipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { ItemService } from 'src/app/sevices/Item/item.service';
import { ProductService } from 'src/app/sevices/Product/product.service';
import { CostcalculationServicesService } from 'src/app/sevices/costcalculation-services.service';
import { ProducedServicesService } from 'src/app/sevices/produced-services.service';
import Swal from 'sweetalert2';



export class produce{
quantity:any = null
date:any = null
total_Amount:any
 userId:number = 1

}
@Component({
  selector: 'app-product-produced',
  templateUrl: './product-produced.component.html',
  styleUrls: ['./product-produced.component.css']
})
export class ProductProducedComponent {
  produce_model:produce=new produce()
  @ViewChild('myForm', { static: true }) myForm!: NgForm; // Get a reference to the form using @ViewChild

constructor(private product_services:ProductService,
  private cost_services:CostcalculationServicesService,
  private items: ItemService, private fb: FormBuilder,
  private produced_services:ProducedServicesService,private datePipe: DatePipe
 ){

}
ngOnInit(){
this.getAllProduct()
this.getAllCost()
this.getAllProduced()
}
product_data:any;
getAllProduct(){
  return this.product_services.getCurrentProduct().subscribe((result:any)=>{
    console.log(result);
    this.product_data = result;
  });
}

getprodbyId(id:any){
  return this.product_services.getproductById(id).subscribe(respo=>{
    console.log(respo)
  })
}

cost_data:any
getAllCost(){
  return this.cost_services.getcost().subscribe(
  respo=>{
   
    this.cost_data= respo
    console.log(this.cost_data)
  }
  )
}

calculateTotal(avg: number, price: number): number {
  if (this.produce_model.date && this.produce_model.quantity) {
    const total = avg * price * parseFloat(this.produce_model.quantity);
    return isNaN(total) ? 0 : total;
  }
  return 0;
}

calculateGrandTotal(): number {
  if (this.produce_model.date && this.produce_model.quantity) {
    return this.product_data.reduce((sum: number, product: any) => {
      const total = this.calculateTotal(product.avg, product.product_price);
      this.produce_model.total_Amount = sum + total;
      return  this.produce_model.total_Amount
    }, 0);
  }
  return 0;
}
grandTotal:number=0
submit() {
  // Calculate the grand total
 this.grandTotal = this.calculateGrandTotal();
  console.log('Grand Total:', this.grandTotal);
  this.produce_model.total_Amount = this.grandTotal;
}

save(){
  const formattedDate = this.formatDate(this.produce_model.date);
 this.produce_model.date = formattedDate
  // console.log(this.produce_model);
  this.saveProduced(this.produce_model)

}




saveProduced(data:any){
  return this.produced_services.createProduct(data).subscribe(respo=>{
    console.log(data)
    this.getAllProduced()
    this.myForm.resetForm(); 
  })
}




produced_data:any
getAllProduced(){
  return this.produced_services.getProduct().subscribe(respo=>{
    this.produced_data = respo
    console.log(this.produced_data)
  })
}
formatDate(date: Date | string | undefined): string {
  if (date) {
    return this.datePipe.transform(date, 'yyyy-MM-dd') || '';
  }
  return ''; // Return an empty string for undefined or null date
}
delete(data:any){
  return this.produced_services.deleteProduct(data).subscribe(
    respo=>{
      console.log(respo)
      this.getAllProduced()
    }
  )
}


futa(data:any) {
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
      outerThis.produced_services.deleteProduct(data).subscribe(
        response => {
          console.log(response);
          Swal.fire({
            title: 'Success!',
            text: 'Product deleted successfully.',
            icon: 'success'
          });
          this.getAllProduced();
          
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


}
  getAll() {
    throw new Error('Method not implemented.');
  }
}
