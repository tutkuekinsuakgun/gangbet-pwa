import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // RouterModule'ü import et

@Component({
  selector: 'app-hot-button',
  standalone: true,
  imports: [RouterModule],  // RouterModule'ü burada dahil et
  templateUrl: './hot-button.component.html',
  styleUrls: ['./hot-button.component.css'],
})
export class HotButtonComponent {}
