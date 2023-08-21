import { DatePipe } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProducedServicesService } from 'src/app/sevices/produced-services.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


export class produce {
  total: any = 0
  total_amount: any = 0
}


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {

  formData !: FormGroup
  constructor(private produced_services: ProducedServicesService,
    private datePipe: DatePipe) {

  }


  ngOnInit() {
    this.getcostandprod()
    this.formData = new FormGroup({
      startDate: new FormControl(null, [Validators.required]),
      endDate: new FormControl(null, [Validators.required])
    })

  }

  produce_modal: produce = new produce()
  costandprod_data: any

  getDataByDate() {
    console.log(this.formData);
    
    return this.produced_services.getCostAndProducedByDate(this.formData.value.startDate, this.formData.value.endDate).subscribe(respo => {
      this.costandprod_data = respo;
      this.produce_modal.total = respo.total;
      console.log(this.costandprod_data);
    });
  }
  getcostandprod() {
    return this.produced_services.getCostAndProduced().subscribe(respo => {
      this.costandprod_data = respo;
      this.produce_modal.total = respo.total;
      console.log(this.costandprod_data);
    });
  }

  calculateDifference(total: number, totalAmount: number): number {
    return totalAmount - total;
  }
  formatDate(date: Date | string | undefined): string {
    if (date) {
      return this.datePipe.transform(date, 'yyyy-MM-dd') || '';
    }
    return ''; // Return an empty string for undefined or null date
  }
  printTable() {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 200;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('angular-demo.pdf');
    });
  }
}