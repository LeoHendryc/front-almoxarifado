import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


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
import { NovoProdutoComponent } from './components/cadastrar/novo-produto/novo-produto.component';

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
    NovaSaidaComponent,
    NovoProdutoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
