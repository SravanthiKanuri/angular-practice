import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/admin/services/product.service';
import { Router } from '@angular/router';
import { ComponentInteractionService } from 'src/app/shared/component-interaction.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products: any = [];
  productUnselectedIcon = "favorite_outlined"
  constructor(private srv: ProductService, private router:Router, private cis: ComponentInteractionService) { }
  ngOnInit(): void {
    console.log('sravanthi');
    this.getAllProducts();
  }
  ngAfterViewInit() {
    console.log('after html');
  }
  getAllProducts() {
    this.srv.all().subscribe(
      // (res)=>{
      //   console.log(res)
      // },
      // (err)=>{
      //   console.log(err)
      // }
      {
        next: (res) => {
          console.log(res);
          this.products = res;
        },
        error: () => {
          console.log('error');
        },
        complete: () => {
          console.log('on suceess or error');
        },
      }
    );
  }
  toggleProductSelection(event:any, product:any){
    //alert("icon")
    
    product.selected = !product.selected 
    const productSelected = this.products.filter((each:any)=>{
      return each.selected

    })
  this.cis.announceProduct(productSelected.length)    
  }
  selectionIcon(product:any){
    // if(product.selected) {
    //   return "favorite"
    // }
    // else{
    //   return "favorite_outlined"
    // }
    return product.selected?"favorite":"favorite_outlined";
  }
  formatPrice(price:any) {
    return ' $ '+price.toFixed(2)
  }
  onEditClicked(event:any, product:any) {
    this.router.navigateByUrl("/admin/product/"+product._id)
    console.log("edit page")
  }
  
}
