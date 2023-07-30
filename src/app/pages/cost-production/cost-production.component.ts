import { DatePipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CostcalculationServicesService } from 'src/app/sevices/costcalculation-services.service';
import { ItemService } from 'src/app/sevices/item.service';
export class Item{
  quantity:any
  date: any = null
  total:any
  userId:number = 1
}
@Component({
  selector: 'app-cost-production',
  templateUrl: './cost-production.component.html',
  styleUrls: ['./cost-production.component.css']
})
export class CostProductionComponent{
  Item_model: Item = new Item();
  items_data: any;
  grandTotal: number = 0; // Initialize the grand total to zero

  @ViewChild('myForm', { static: true }) myForm!: NgForm; // Get a reference to the form using @ViewChild
  constructor(private items: ItemService,
    private cost_services:CostcalculationServicesService,
    private datePipe: DatePipe) {}

  ngOnInit() {
    this.getAll();
    this.getAllCost()
  }


  getAllDataByDate(){
    this.items.getUser_Info().subscribe(
      (respo) => {
        this.items_data = respo;
        console.log(this.items_data);
        this.calculateGrandTotal(); // Calculate the grand total once the data is loaded
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  getAll() {
    this.items.getUser_Info().subscribe(
      (respo) => {
        this.items_data = respo;
        console.log(this.items_data);
        this.calculateGrandTotal(); // Calculate the grand total once the data is loaded
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  submit() {
    console.log(this.Item_model.quantity);
    // Call the calculateTotal() function for each item in items_data array
    this.items_data.forEach((item: any) => {
      item.total = this.calculateTotal(this.Item_model.quantity, item.item_price);
    });

    this.calculateGrandTotal(); // Recalculate the grand total after submitting the form
  }

  calculateTotal(qty: number, price: number): number {
    return qty * price;
  }

  calculateGrandTotal() {
    this.grandTotal = this.items_data.reduce((sum: number, item: any) => {
      console.log('Item total:', item.total); // Debug statement
      return sum + item.total;
    }, 0);
    console.log('Grand total:', this.grandTotal);
    this.Item_model.total = this.grandTotal
     // Debug statement
  }

savecost(data:any){
  return this.cost_services.createcost(data).subscribe(
    respo=>{
      console.log(respo)
      this.getAllCost()
    }
  )
}
save(){
// console.log(this.Item_model)

const costdate = this.formatDate(this.Item_model.date)
this.Item_model.date = costdate
this.savecost(this.Item_model)
this.myForm.resetForm(); 
}

cost_data:any

getAllCost(){
  return this.cost_services.getcost().subscribe(
    respo=>{
      console.log(respo)
      this.cost_data = respo
    }
  )
}
delete(data:any){
  return this.cost_services.deletecost(data).subscribe(respo=>{
    console.log(respo)
    this.getAllCost()
  })
}
formatDate(date: Date | string | undefined): string {
  if (date) {
    return this.datePipe.transform(date, 'yyyy-MM-dd') || '';
  }
  return ''; // Return an empty string for undefined or null date
}
}