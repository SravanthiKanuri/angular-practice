import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared.module';
import { AdminServicesModule } from './admin-services.module';
@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    AdminServicesModule
  ]
})
export class AdminModule { }
