import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomDirective } from '../../Directives/custom.directive';

@Component({
  selector: 'app-table',
  imports: [FormsModule, CommonModule, CustomDirective],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent implements OnChanges {
  @Input() prod: any;

  productList = [
    {
      prodName: 'Wireless Headphones',
      prodDesc:
        'Noise-cancelling over-ear headphones with 40-hour battery life.',
      prodImg:
        'https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60',
      prodRate: '2',
    },
    {
      prodName: 'Smart Watch',
      prodDesc:
        'Track your fitness and notifications with a sleek smart watch.',
      prodImg:
        'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60',
      prodRate: '5',
    },
    {
      prodName: 'Portable Speaker',
      prodDesc:
        'Compact Bluetooth speaker with deep bass and splash-proof design.',
      prodImg:
        'https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZXRvb3RoJTIwc3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=80',
      prodRate: '3',
    },
    {
      prodName: 'Mobile Phone',
      prodDesc:
        'Track your fitness and notifications with a sleek smart watch.',
      prodImg:
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
      prodRate: '4',
    },
  ];

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (!changes['prod'].firstChange) {
      this.productList.push(this.prod);
    }
  }

  getStars(rate: string): boolean[] {
    const stars = [];
    const rating = +rate;
    for (let i = 1; i <= 5; i++) {
      stars.push(i <= rating);
    }
    return stars;
  }
}
