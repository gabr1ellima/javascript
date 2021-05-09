### Aula 04 - Selecionando qualquer coisa

- Seletores avançados CSS para
  - Seletor `>`, para acessar os filhos de determinado elemento. Por exemplo, para acessar todos os `p` dentro de `main`:

  ```
  main > p {
    background: blue;
  }
  ```
  Seletor `+`, para acessar o primeiro irmão de determinado elemento. Por exemplo, para acessar o primeiro `p` após um `img`:

  ```
  img + p {
    background: yellow;
  }
  ```

  Seletor `~`, para acessar todos os irmãos de determinado elemento. Por exemplo, para acessar todos os `p` após um `img`:

  ```
  img ~ p {
    background: red;
  }
  ```

  Seletor `not`, para acessar os elementos, exceto algum. Por exemplo, para acessar todos os `p` dentro de `main`, exceto o `p` que tem `id` `missao`:

  ```
  main p:not(#missao) {
    background: orange;
  }
  ```

- Como fazer contas com CSS, com a propriedade `calc`

### Alua 05 - Opacidade e Sombra

- Como manipular a opacidade dos elementos, com a propriedade CSS `opacity`

- Como manipular a opacidade das cores

- Como adicionar um sombreamento em volta dos elementos, com a propriedade CSS `box-shadow`

- Como adicionar um sombreamento em textos, com a propriedade CSS `text-shadow`

### Aula 06 - Design Responsivo

- Design responsivo: como ajustar o estilo da nossa página de acordo com o tamanho da tela do dispositivo que a acesse

  - Meta tag de Viewport
  - Media Queries