import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


  // aula 9

  // Como buildar e fazer o deploy no github pages
  // digite no terminal:
  // ng build --base-href="https://MarceloLimaCodes.github.io/porway-computers/" --output-path dist/proway-computers

  // fique atento a flag que irá fazer o build da aplicação, no caso aqui vc vai no angular.json, olhe em "options" e depois "outputPath". daí vc precisa passar essa flag de output no final do comando do terminal.

  // agora é só criar o nome do repositorio com o mesmo nome de projeto que está na url.
  // qualquer atualização no código é só repetir o codigo de build.
  // Lembrando que as imagens precisam estar com o nome da rota no inicio com um ".", ex: "./assets" para as imagens serem carregadas
  
  // com seu repositorio buildado e hospedado no github, dentro dele, vá em settings, em pages, selecione a branch e depois o output-patch dele no fim é só salvar.

  // buildar sua aplicação e fazer o deploy dela é importante para criar um portifólio sem que o recruiter precise ficar baixando e rodando a aplicação na maquina dele