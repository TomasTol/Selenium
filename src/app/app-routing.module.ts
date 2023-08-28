import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargaComponent } from './carga/carga.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{
  path: "login",
  component: LoginComponent,
  title: "login"
},{
  path: "carga",
  component: CargaComponent,
  title: "carga"
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
