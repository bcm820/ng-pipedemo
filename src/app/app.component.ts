import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class=row>
      <div class=col-sm-12>
          <h3 class=text-center>Star Trek: The Next Generation</h3>
          <hr>
      </div>
    </div>

    <div class=row>
      <div class=col-sm-12>
          <app-main></app-main>
      </div>
    </div>
  `
})
export class AppComponent {
  
  constructor(){}

}
