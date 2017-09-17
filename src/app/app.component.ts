import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Retro Ninja Switchboard';
  colors = [
    {'background-color':'red'},
    {'background-color':'green'},
    {'background-color':'blue'},
    {'background-color':'yellow'},
    {'background-color':'cyan'},
    {'background-color':'black'},
    {'background-color':'white'}];

  getRandomColor() {
    return this.colors[Math.floor(Math.random()*6)+1];
  }
}
