import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ComponentInteractionService {

  constructor() { }
  private productSource = new Subject<any>();
  

  // Observable string streams
  productSourced$ = this.productSource.asObservable();
  

  // Service message commands
  announceProduct(mission: any) {
    this.productSource.next(mission);
  }

}
