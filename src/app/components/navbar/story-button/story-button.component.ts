import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // RouterModule'ü import et

@Component({
  selector: 'app-story-button',
  standalone: true,
  imports: [RouterModule],  // RouterModule'ü burada dahil et
  templateUrl: './story-button.component.html',
  styleUrls: ['./story-button.component.css'],
})
export class StoryButtonComponent {}
