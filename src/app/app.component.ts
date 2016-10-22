import { Component } from '@angular/core';

// Add the RxJS Observable operators for http requests
import './rxjs-operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';

  randomNumber = this.generateRandomNumber()

  generateRandomNumber() {
    return Math.round(Math.random() * 5) + 1
  }
}
