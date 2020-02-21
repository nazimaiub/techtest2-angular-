import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TradeComponent } from './components/trade/trade.component';
import { AllListComponent } from './components/all-list/all-list.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([{
    path:'',
    component: TradeComponent
  },
  {
    path:'allList',
    component: AllListComponent
  }
])],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
