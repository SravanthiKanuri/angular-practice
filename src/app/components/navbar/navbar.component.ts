import { Component, OnInit } from '@angular/core';
import { MenuItems } from './MenuItems';
import { MenuItem } from 'src/app/interfaces/menu-item';
import { ComponentInteractionService } from 'src/app/shared/component-interaction.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  watcher:any;
  constructor(private cis:ComponentInteractionService){

  }
  menuItems:MenuItem[]= MenuItems

  count:any = 0;
  ngOnInit(): void {
    this.watcher = this.cis.productSourced$.subscribe(value=>{
      this.count = value
    })
  }
  ngOnDestroy() {
    this.watcher.unsubscribe()
  }
}
