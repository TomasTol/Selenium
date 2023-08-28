import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit {
  mensajeError: string

  constructor(private router: Router){
    this.mensajeError = ""
  }
  ngOnInit(): void {

  }
  login(usuario: string, contraseña: string){
    if(usuario == "juan" && contraseña == "pablo"){
      this.router.navigate(["/carga"])
    }
    else{
      this.mensajeError = "datos incorrectos"
    }
  }

}


