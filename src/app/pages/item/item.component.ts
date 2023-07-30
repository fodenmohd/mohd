import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ItemService } from 'src/app/sevices/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  form!:FormGroup;  
  item : any;

  constructor(private itemService: ItemService){}

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
    this.itemService.createUser_Info(values).subscribe( response => {
      console.log(response);
      this.getAll()
    })
  }

  getAll(){
    this.itemService.getUser_Info().subscribe( response => {
      this.item = response;
      console.log(this.item);

    })
  }
  futa(id:number){
    this.itemService.deleteUser_Info(id).subscribe( response => {
      console.log(response);
      this.getAll();
    })

  }
  

}
