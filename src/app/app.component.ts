import { Component } from '@angular/core';
import { UserService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  people : any = [];

  constructor(){
    let user = new UserService();
    this.people = user.getUsers();
  }

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

  onKeyUp(userName){
    console.log(userName);
  }

  person = {
    name: 'Moises',
    age: 38
  }
}
