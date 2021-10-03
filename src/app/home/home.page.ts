import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component
({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage 
{
  constructor
  (private router: Router) 
  {
  }
  
  nextPageImc() 
  {
    this.router.navigate(['/imc']);
  }

  nextPagePam() 
  {
    this.router.navigate(['/calculadora']);
  }

  nextPageDosis() 
  {
    this.router.navigate(['/dosis']);
  }

  minsalpage()
  { 
    window.open('https://www.minsal.cl/', '_system');
  }

  heartpage()
  { 
    window.open('https://www.heart.org/', '_system');
  }

}
