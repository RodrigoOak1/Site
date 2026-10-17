# Site do Rodrigo

Portefólio e blog, publicado com GitHub Pages em https://rodrigooak1.github.io/site/

O site é gerado automaticamente pelo GitHub (Jekyll). Basta editar ficheiros e fazer commit: em poucos minutos o site atualiza-se.

## Como acrescentar um post

1. Na pasta `_posts`, crie um ficheiro com o nome `AAAA-MM-DD-titulo-do-post.md`
   (por exemplo `2026-11-02-o-meu-primeiro-jogo.md`).
2. No topo, escreva isto (entre as linhas de três traços):

   ```
   ---
   title: "O título do post"
   tipo: Blog
   ---
   ```

   O `tipo` pode ser `Blog`, `Análise`, `Jogo` ou outro que queira. Cada tipo novo aparece sozinho nos filtros da página Blog.
3. Escreva o texto por baixo, em Markdown.

## Como acrescentar um jogo

1. Guarde a capa em `assets/img/` (o itch.io usa capas de 315×250 px).
2. Na pasta `_games`, copie um dos ficheiros de exemplo e mude o nome (por exemplo `o-meu-jogo.md`).
3. Preencha os campos no topo do ficheiro:

   | Campo | Para que serve |
   | --- | --- |
   | `title` | Nome do jogo |
   | `ordem` | Posição na grelha (1 aparece primeiro) |
   | `destaque: true` | Mostra o jogo no destaque da Home (só um jogo) |
   | `genero`, `plataformas`, `estado`, `lancamento`, `ferramentas` | Caixa "Informações" |
   | `resumo` | Frase curta mostrada na Home |
   | `capa` | Caminho da capa, por exemplo `/assets/img/o-meu-jogo.png` |
   | `capturas` | Até 3 imagens de captura de ecrã |
   | `link_itch`, `link_download`, `link_github` | Botões "Como aceder" (deixe `""` para esconder) |

4. A descrição do jogo escreve-se por baixo, em Markdown.

## Dados pessoais e links

Abra `_config.yml` e preencha o seu nome, a frase "Sobre mim", o link do itch.io e o email (tudo o que ficar vazio é escondido).
O texto da página Sobre está em `sobre.md`.

## Mudar o aspeto

Tudo o que é visual está em `assets/css/style.css`. No topo do ficheiro estão as **cores** e as **medidas**: mude esses valores e o site inteiro muda.

## Estrutura

| Pasta / ficheiro | O que tem |
| --- | --- |
| `index.html`, `blog/`, `jogos/`, `sobre.md` | As páginas principais |
| `_layouts/` | O desenho de cada tipo de página (home, post, lista, jogos, jogo, sobre) |
| `_includes/` | Peças partilhadas: cabeçalho, menu, rodapé, cartão de jogo, barra lateral |
| `_posts/` | Os posts do blog |
| `_games/` | Os jogos |
| `assets/` | CSS, imagens e o pequeno script do filtro de posts |
