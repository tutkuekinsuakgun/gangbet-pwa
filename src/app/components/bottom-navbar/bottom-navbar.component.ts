import { Component } from '@angular/core';
import { WalletButtonComponent } from '../navbar/wallet-button/wallet-button.component';  // WalletButtonComponent doğru şekilde import edilmelidir.
import { GangsButtonComponent } from '../navbar/gangs-button/gangs-button.component';
import { ProfileButtonComponent } from '../navbar/profile-button/profile-button.component';
import { HotButtonComponent } from '../navbar/hot-button/hot-button.component';

@Component({
  selector: 'app-bottom-navbar',
  standalone: true,
  imports: [
    WalletButtonComponent,
    ProfileButtonComponent,
    HotButtonComponent,
    GangsButtonComponent
  ],
  templateUrl: './bottom-navbar.component.html',
  styleUrls: ['./bottom-navbar.component.css']
})
export class BottomNavbarComponent {}
