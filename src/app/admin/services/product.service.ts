import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/dev.environment';
import { AdminServicesModule } from '../admin-services.module';

@Injectable({ 
  providedIn: AdminServicesModule 
})
export class ProductService {
  constructor(private http: HttpClient) {}
  all() {
    // return this.http.get(environment.api+"/products")
    return this.http.get(`${environment.api}products`);
  }
  get(id: any) {
    // return this.http.get(environment.api+"/products")
    return this.http.get(`${environment.api}products/${id}`);
  }
  create(payload: any) {
    return this.http.post(`${environment.api}products`, payload);
  }
  update(payload: any, id: any) {
    return this.http.put(`${environment.api}products/${id}`, payload);
  }
}
