import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Router'ı import et

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent {
  constructor(private router: Router) {}

  // Yönlendirme işlevi
  goToWallet() {
    this.router.navigate(['/wallet']);  // Bu, 'wallet' sayfasına yönlendirecek
  }
}
