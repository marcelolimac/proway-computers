import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-pesquisa',
  templateUrl: './barra-pesquisa.component.html',
  styleUrls: ['./barra-pesquisa.component.css']
})
export class BarraPesquisaComponent {
  pesquisa: string = ''

  constructor(
    private router: Router
  ) {}

  pesquisar() {
    if(this.pesquisa) {
      this.router.navigate(['produtos'], { queryParams: { pesquisa: this.pesquisa } });
      return;
    }

    this.router.navigate(["produtos"]);
  }
}

// o objeto com chave "queryParams" vai escrever "pesquisa" e mandar o valor de this.pesquisa, que está digitado no input pra rota de produtos, caso não tenha nada, ele só direciona para rota de produtos