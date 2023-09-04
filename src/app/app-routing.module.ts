import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ConsultarComponent } from './components/consultar/consultar.component';
import { CadastrarComponent } from './components/cadastrar/cadastrar.component';
import { EntradaComponent } from './components/entrada/entrada.component';
import { SaidaComponent } from './components/saida/saida.component';
import { NovaEntradaComponent } from './components/entrada/nova-entrada/nova-entrada.component';
import { NovaSaidaComponent } from './components/saida/nova-saida/nova-saida.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "consultar", component: ConsultarComponent },
  { path: "cadastrar", component: CadastrarComponent },
  { path: "entrada", component: EntradaComponent },
  { path: "saida", component: SaidaComponent },
  { path: "nova-entrada", component: NovaEntradaComponent},
  { path: "nova-saida", component: NovaSaidaComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
