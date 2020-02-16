import { SecurityModule } from './security/security.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    SecurityModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
