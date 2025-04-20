import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // RouterModule'ü import et

@Component({
  selector: 'app-gangs-button',
  standalone: true,
  imports: [RouterModule],  // RouterModule'ü burada dahil et
  templateUrl: './gangs-button.component.html',
  styleUrls: ['./gangs-button.component.css'],
})
export class GangsButtonComponent {}
