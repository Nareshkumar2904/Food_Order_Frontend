import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent {
  @Input() visible = false;
  @Input() notFoundMessage = "Nothing Found !";
  @Input() resetLinkText = "Reset";
  @Input() resetLinkRoute = '/';
  @Input() disable = true;
}
