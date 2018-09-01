import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  name: string;
  year = 1900;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(productForm: any): void {
    console.log(productForm);
  }

  check(productName?: any) {
    console.log(productName);
  }

}
