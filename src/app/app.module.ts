import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaAComponent } from './pages/pagina-a/pagina-a.component';
import { MuestraNombreComponent } from './components/muestra-nombre/muestra-nombre.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaAComponent,
    MuestraNombreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
