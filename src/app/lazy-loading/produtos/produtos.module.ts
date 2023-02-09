import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos.component';
import { DetalheProdutoComponent } from './detalhe-produto/detalhe-produto.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProdutosComponent,
    DetalheProdutoComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    FormsModule

  ]
})
export class ProdutosModule { }


// use (  ng g module lazy-loading/produtos --route produtos --module app.module  ) para criar a pasta, lazy-loading, criar esse modulo com a rota produtos e dizer
// que esse modulo faz parte do app.

// agora use (  ng g component lazy-loading/produtos/detalhe-produto --module produtos.module  ) para criar um componente que pertence somente ao modulo de produtos