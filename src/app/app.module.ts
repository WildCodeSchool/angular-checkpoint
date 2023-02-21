import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CupcakeListComponent } from './pages/cupcake-list/cupcake-list.component';
import { InstructionsComponent } from './pages/instructions/instructions.component';
import { CupcakeComponent } from './components/cupcake/cupcake.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CupcakeListComponent,
    InstructionsComponent,
    CupcakeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
