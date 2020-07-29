import { Component } from '@angular/core';
import * as encoding from 'encoding-japanese';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-i18n';
  sjisArray = encoding.convert(new Uint8Array([]), 'UTF8', 'SJIS');
}
