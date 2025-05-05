import { Component } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { TableComponent } from '../table/table.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  imports: [FormComponent, TableComponent, CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  prodObj: any;
  handleProdAdded(prod: any) {
    this.prodObj = prod;
  }
}
