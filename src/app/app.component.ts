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
  statusButton = false;
  isActive = true;

  save(e){
    console.log(e)
  }

  hover(){
    console.log('It is hover...!')
  }

  onKeyUp(e){
    if(e.keyCode === 13){
      console.log("Enter has been pressed");
    }
  }
}
