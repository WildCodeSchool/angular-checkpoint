import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CupcakeListComponent } from './pages/cupcake-list/cupcake-list.component';
import { HomeComponent } from './pages/home/home.component';
import { InstructionsComponent } from './pages/instructions/instructions.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "cupcakes",
    component: CupcakeListComponent
  },
  {
    path: "instructions",
    component: InstructionsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
