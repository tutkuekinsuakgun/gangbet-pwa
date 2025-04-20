import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WalletComponent } from './pages/wallet/wallet.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'wallet', component: WalletComponent },
];
