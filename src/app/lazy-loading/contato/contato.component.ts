import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {
  formContato = this.fb.group({
    nome: ["", [
      Validators.minLength(4),
      Validators.required
    ]],

    assunto: ["", [
      Validators.minLength(10),
      Validators.required
    ]],

    telefone: ["", [
      Validators.minLength(11),
      Validators.required
    ]],

    email: ["", [
      Validators.email,
      Validators.required
    ]],

    mensagem: ["", [
      Validators.minLength(20),
      Validators.required
    ]]

  })
  
  constructor(
    private fb: FormBuilder
  ) { }

  enviarFormulario() {
    alert("A mensagem foi enviada");
    this.formContato.reset();
  }
}



// ng g module contato --route contato --module app.module

/* 
  1 - Para criarmos a validação, primeiro importamos dentro de contato.module.ts "ReactiveFormsModule" dentro do "import"
  2 - usamos a ingeção de dependência para criar um FormBuilder
  3 - criamos uma propriedade chamada formContato que vai receber essa ingeção de dependência que chamamos de "fb" usando a função "group"
  4 - agora cada input do formulário tem dois parametros no vetor, o primeiro é seu valor inicial e o segundo são os Validators que contem cada propriedade de validação.

  5 - no html as [class.valid] e invalid são validações para mudar as cores da borda do input sem ter que fazer isso pelo css

  6 - [disabled]="formContato.invalid" ele deixa o botão na cor cinza e desabilitado, ele só vai voltar a funcionar quando todos os campos estiverem validos.

  7 - aplicamos o (ngSubmit) a função de enviar formulario e dizemos que o botão é um type submit.

  instale o ngx-mask para usar nascara de telefone no input de telefone (   npm install ngx-mask    )               <= NÃO FUNCIONA MAIS
  importe ele no contato.module.ts e depois só usar sua propriedade "mask" dentro do input.
*/