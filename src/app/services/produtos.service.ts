import { Injectable } from '@angular/core';

import { IProduto, produtos } from '../produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  allProducts: IProduto[] = produtos;

  constructor() { }

  getAll() {
    return this.allProducts
  }

  getOne(produtoId: number) {
    return this.allProducts.find(produto => produto.id === produtoId)
  }
}
