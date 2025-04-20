import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // RouterModule'ü import et

@Component({
  selector: 'app-profile-button',
  standalone: true,
  imports: [RouterModule],  // RouterModule'ü burada dahil et
  templateUrl: './profile-button.component.html',
  styleUrls: ['./profile-button.component.css'],
})
export class ProfileButtonComponent {}
