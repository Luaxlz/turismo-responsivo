# <p align="center"> Página responsiva em HTML e CSS puro</p

<p align="center">
  <img src= "/preview.gif" />
</p>

Esse é um projeto que fiz em forma de desafio para conclusão de módulo de HTML e CSS do curso da Cod3r.
Retirei a ideia e o desafio do vídeo **"Analisando o HTML e CSS dos estagiários"** do canal **DevMedia** que pode ser visto [aqui](https://www.youtube.com/watch?v=YPYwND5WGxw&t=61s).


## Proposta:
> A proposta do desafio é fazer uma página totalmente responsiva com html e css puro, foi repassado 4 layouts 320px, 450px, 768px e 1366px, o objetivo era criar uma página responsiva que se adequasse a cada uma dessas resoluções dentro do layout proposto, para tal seria necessário usar todo o conhecimento adquirido no curso. Você pode verificar os layouts originais [aqui](https://github.com/Luaxlz/turismo-responsivo/tree/main/layout)

## Desafios:
Criar uma página totalmente responsiva foi bem desafiador e por momentos tive de buscar soluções ou ideias externas, mas reconheço que foi muito importante para fixar o conhecimento e entender melhor como funciona a tecnologia html e css, reconheço também que esse desafio me trouxe lucidez quando ao código em si e como melhorar minha escrita, ou seja, alcansar o tão aclamado código limpo e claro, algo que tenho muita preocupação em desenvolver ao longo dos meus estudos e carreira.
Utilizei para fazer a galeria de imagens o CSS Grid, alinhando as imagens conforme necessário como podemos ver atraves desse código:
```JavaScript
.image-grid {
    --gap: 16px;
    --num-cols: 4;
    --row-height: 200px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(var(--num-cols), 1fr);
    grid-auto-rows: var(--row-height);
    gap: var(--gap);
}
```
Utilizei também para criar a responsividade a propriedade @media do CSS, um **erro que me ensinou muito nesta etapa** foi o fato de começar a codar pela versão desktop da página, discutindo com outros devs depois e também lendo um pouco na internet descobri que era muito mais fácil e intuitivo começar pela versão mobile pois melhora muito a responsividade do site e deixa o código mais limpo.
Uma grande dificuldade que tive foi com a estilização dos formulários e labels, tive que dedicar um bom tempo para estudo e analise para criar essa parte da página.

## Próximos passos:
Pretendo começar a adicionar mais funcionalidades com JavaScript e CSS, tais como:
- [ ] Adicionar responsividade entre páginas usando JS
- [ ] Adicionar funcionalidade Back-end com JS para formulários
- [ ] Adicionar animações em CSS
- [ ] Refatorar código para melhorar clareza e rever funcionalidades.
