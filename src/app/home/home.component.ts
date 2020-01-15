import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <transition-component>Home</transition-component>
<nav>
	<a routerLink="/about">About</a>
  <br>
	<a routerLink="/home">Home</a>
</nav>
  `

})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
