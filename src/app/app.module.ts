import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ConsultarComponent } from './components/consultar/consultar.component';
import { CadastrarComponent } from './components/cadastrar/cadastrar.component';
import { EntradaComponent } from './components/entrada/entrada.component';
import { SaidaComponent } from './components/saida/saida.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { NovaEntradaComponent } from './components/entrada/nova-entrada/nova-entrada.component';
import { NovaSaidaComponent } from './components/saida/nova-saida/nova-saida.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ConsultarComponent,
    CadastrarComponent,
    EntradaComponent,
    SaidaComponent,
    MenuComponent,
    HomeComponent,
    NovaEntradaComponent,
    NovaSaidaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
