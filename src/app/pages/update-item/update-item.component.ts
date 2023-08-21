import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/sevices/Item/item';
import { ItemService } from 'src/app/sevices/Item/item.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent {
  item: Item = new Item();

  Id:any;

  constructor(private itemService: ItemService, 
    private route: ActivatedRoute,
     private router: Router) {}

  ngOnInit(): void {
    this.Id = this.route.snapshot.params['item_Id'];
    this.itemService.getItemById(this.Id).subscribe(data=>{
      this.item=data;
      console.log(data)
    });
  }

  updateItem(){
    this.itemService.updateItem(this.Id,this.item).subscribe( data => {
      // console.log(response);
      Swal.fire({
        title: 'success!',
        text: 'Item Added successfully.',
        icon: 'success'  
      });
      this.router.navigate(['home/items']);
      this.getAll()
    })
  }
  getAll() {
    throw new Error('Method not implemented.');
  }

}
