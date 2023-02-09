import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IProduto } from 'src/app/produtos';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {
  allProducts: IProduto[] | undefined;

  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const produtos = this.produtosService.getAll();
    this.route.queryParamMap.subscribe(params => {
      const pesquisa = params.get("pesquisa")?.toLocaleLowerCase();

      if(pesquisa) {
        this.allProducts = produtos.filter(produto => produto.descricao.toLocaleLowerCase().includes(pesquisa));
        return;
      }

      this.allProducts = produtos
    })
  }
}
