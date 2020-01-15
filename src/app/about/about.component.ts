import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about-home',
  template: `
  <transition-component>about</transition-component>
<nav>
	<a routerLink="/about">About</a>
  <br>
	<a routerLink="/home">Home</a>
</nav>
  `

})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
