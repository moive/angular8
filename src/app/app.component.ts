import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  message = 'Curso de angular...!';
  name = 'Moises';

  getNombre(){
    return this.name;
  };
  imageURL = "http://lorempixel.com/400/200";
}
