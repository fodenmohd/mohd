import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { ItemService } from 'src/app/sevices/Item/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  form!:FormGroup;  
  item : any;

  constructor(private itemService: ItemService, private router: Router){}

  ngOnInit(){
    this.form = new FormGroup({
      item_Name : new FormControl(null,[Validators.required]),
      item_Description : new FormControl(null,[Validators.required]),
      item_price : new FormControl(null,[Validators.required])
    });

    this.getAll();

  }

  submit(){
    const values = this.form.value;
    console.log(values)
    this.itemService.createItem(values).subscribe( response => {
      console.log(response);
      Swal.fire({
        title: 'success!',
        text: 'Item Added successfully.',
        icon: 'success'
      });
      this.getAll()
    })
  }

  updateItem(Id: number){
    this.router.navigate(['home/update-item',Id])
  }



  getAll(){
    this.itemService.getItem().subscribe( response => {
      this.item = response;
      console.log(this.item);

    })
  }
  futa(id: number) {
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
        this.itemService.deleteItem(id).subscribe(
          response => {
            console.log(response);
            Swal.fire({
              title: 'Success!',
              text: 'Item deleted successfully.',
              icon: 'success'
            });
            this.getAll();
          },
          error => {
            Swal.fire({
              title: 'Error!',
              text: 'Failed to delete item.',
              icon: 'error'
            });
          }
        );
      }
    });


  }

 
  
  printTable() {
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


