import { Component, OnInit,Input } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { Tax } from '../models/tax';

@Component({
  selector: 'app-tax',
  templateUrl: './tax.component.html',
  styleUrls: ['./tax.component.css']
})
export class TaxComponent implements OnInit {
	tax:Tax = {};
  
  constructor(translate: TranslateService) {  }

  onSubmit(event){
    event.preventDefault();
    console.log(this.tax);
  }

  ngOnInit(): void {
  }

}
