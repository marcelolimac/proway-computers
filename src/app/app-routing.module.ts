import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NaoEncontradoComponent } from './components/pages/nao-encontrado/nao-encontrado.component';

const routes: Routes = [
  { path: "", redirectTo: "produtos", pathMatch: "full" },
  { path: 'produtos', loadChildren: () => import('./lazy-loading/produtos/produtos.module').then(m => m.ProdutosModule) },
  { path: 'carrinho', loadChildren: () => import('./lazy-loading/carrinho/carrinho.module').then(m => m.CarrinhoModule) },
  { path: 'contato', loadChildren: () => import('./lazy-loading/contato/contato.module').then(m => m.ContatoModule) },
  { path: "**", component: NaoEncontradoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
