import { Component, OnInit,Input } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { Tax } from '../models/tax';
import {TaxService} from '../data/tax.service';

@Component({
  selector: 'app-tax',
  templateUrl: './tax.component.html',
  styleUrls: ['./tax.component.css']
})
export class TaxComponent implements OnInit {
	tax:Tax = {
  id:0,
  name:'',
  gst:0,
  pst:0,
  lct:0,
  disabled:false
  };
  
  constructor(
    private translate: TranslateService, private taxService: TaxService
    ) {  }

  onSubmit(event){
    
    event.preventDefault();
    //console.log(this.tax);    
  }

  ngOnInit(): void {
    this.taxService.get().subscribe(tax => console.log(tax));
  }

}
