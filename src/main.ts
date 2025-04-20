import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';  // provideRouter import et
import { routes } from './app/app.routes';  // routes import et

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),  // Router'ı sağla
  ]
}).catch((err) => console.error(err));
