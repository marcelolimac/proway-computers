import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IProdutoCarrinho } from 'src/app/produtos';
import { CarrinhoService } from 'src/app/services/carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent {
  itensCarrinho: IProdutoCarrinho[] = [];
  total: number = 0;

  constructor(
    private carrinhoService: CarrinhoService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obterCarrinho();
    this.calcularTotal();
  }

  calcularTotal() {
    this.total = this.itensCarrinho.reduce((prev, curr) => prev + (curr.preco * curr.qntNoCarrinho), 0);
  }

  removeItemCarrinho(produtoId: number) {
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId);    // remove do carrinho
    this.carrinhoService.removerItemLS(produtoId);                                    // remove do localStorage
    this.calcularTotal();                                                             // calcula novamente o total
  }

  comprar() {
    alert("Compra finalizada com sucesso");
    this.carrinhoService.limparCarrinho();
    this.route.navigate(["/"]);
  }
}
