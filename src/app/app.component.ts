import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // RouterModule'ü import et
import { BottomNavbarComponent } from './components/bottom-navbar/bottom-navbar.component'; // BottomNavbarComponent'i import et

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, BottomNavbarComponent],  // RouterModule ve BottomNavbarComponent'i imports kısmına ekle
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'gangbet-pwa';
}
