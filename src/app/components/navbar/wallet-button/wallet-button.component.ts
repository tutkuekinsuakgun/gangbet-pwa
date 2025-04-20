import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';  // RouterLink modülünü import et

@Component({
  selector: 'app-wallet-button',
  standalone: true,
  imports: [RouterLink],  // RouterLink'i kullanıyoruz
  template: `
    <button [routerLink]="'/wallet'" class="wallet-button">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h18v18H3V3z" />
      </svg>
      Wallet
    </button>
  `,
  styleUrls: ['./wallet-button.component.css']
})
export class WalletButtonComponent {}
