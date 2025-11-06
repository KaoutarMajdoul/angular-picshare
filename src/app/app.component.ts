import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PicComponent } from './pic/pic.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    PicComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
