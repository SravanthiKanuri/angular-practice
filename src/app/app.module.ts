import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { ButtonIconComponent } from './components/button-icon/button-icon.component';
import { FormateCurrencyPipe } from './pipes/formate-currency.pipe';
import { SharedModule } from './shared.module';
import { OnlyNumbersDirective } from './directives/only-numbers.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
    PageNotFoundComponent,
    NavbarComponent,
    ButtonIconComponent,
    FormateCurrencyPipe,
    OnlyNumbersDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
        
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
