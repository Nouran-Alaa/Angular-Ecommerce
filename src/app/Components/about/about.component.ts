import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit {
  isLoading = true;

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }
}
