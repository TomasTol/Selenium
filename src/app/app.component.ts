import { IfStmt } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  a: boolean
  title = 'my-app';

  constructor(private router: Router){
    this.a = true
  }


 

}
