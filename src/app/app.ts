import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Barimbao-Static-Website');

  onGetStarted() {
    // simple action for demonstration
    alert('Button clicked!');
  }
}
