import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TaxComponent } from './tax/tax.component';	

const routes: Routes = [
{ path:'tax',component:TaxComponent},
{path: '', redirectTo: '/tax', pathMatch: 'full'}
];

@NgModule({
 declarations: [],
 imports: [ RouterModule.forRoot(routes) ],
 exports: [ RouterModule ]
  
})
export class AppRoutingModule { }
