# Portal eQuadros

![Project Banner](public/img/hero.jpg)

Um portal de conteúdo moderno e responsivo, construído com React e TypeScript. O projeto serve como uma plataforma central para exibir notícias, vídeos, eventos e oportunidades, apresentando um design dinâmico e interativo.

## Funcionalidades

- **Header Inteligente**: O cabeçalho oculta-se automaticamente ao rolar a página para baixo e reaparece ao rolar para cima, otimizando o espaço de visualização.
- **Menu Mobile Deslizante**: Uma experiência de navegação fluida em dispositivos móveis com um menu lateral animado.
- **Layout Responsivo**: Totalmente adaptável para uma experiência de utilizador consistente em desktops, tablets e smartphones.
- **Seções de Conteúdo Dinâmico**: Inclui seções para notícias, ecossistema, depoimentos, FAQ, estatísticas e muito mais.
- **Integração Social**: Links diretos para perfis em redes sociais como Facebook, Twitter, Instagram e YouTube.
- **Animações e Transições**: Efeitos de transição suaves em elementos interativos e animações de carregamento, utilizando Framer Motion.


## Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias:

- **Framework**: [React](https://reactjs.org/)
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Estilização**: [Tailwind CSS](https://tailwindcss.com/)
- **Componentes UI**: [Material-UI](https://mui.com/)
- **Roteamento**: [React Router](https://reactrouter.com/)
- **Carrossel/Slider**: [Swiper.js](https://swiperjs.com/)
- **Animações**: [Framer Motion](https://www.framer.com/motion/)
- **Ícones**: [React Icons](https://react-icons.github.io/react-icons/) & [Phosphor Icons](https://phosphoricons.com/)



## Começando

Para executar uma cópia local deste projeto, siga os passos abaixo.

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) (versão 18 ou superior) e o [npm](https://www.npmjs.com/) instalados na sua máquina.

### Instalação

1.  Clone o repositório para a sua máquina local:
    ```sh
    git clone https://github.com/Manueljose22/Portal-eQuadros.git
    ```
2.  Navegue até o diretório do projeto:
    ```sh
    cd portal-equadros
    ```
3.  Instale as dependências do projeto:
    ```sh
    npm install
    ```

## Scripts Disponíveis

No diretório do projeto, pode executar os seguintes comandos:

-   **`npm run dev`**
    Inicia a aplicação em modo de desenvolvimento. Abra [http://localhost:5173](http://localhost:5173) (ou a porta indicada no terminal) para a visualizar no seu browser.

-   **`npm run build`**
    Compila a aplicação para produção na pasta `dist`.

-   **`npm run lint`**
    Executa o linter (ESLint) para analisar o código e encontrar problemas de estilo ou erros.

-   **`npm run preview`**
    Inicia um servidor local para pré-visualizar a build de produção.

## Estrutura de Pastas

A estrutura de pastas principal do projeto está organizada da seguinte forma:

```
.
├── public/         # Ficheiros estáticos (imagens, vídeos)
└── src/
    ├── assets/     # Outros recursos estáticos
    ├── components/ # Componentes React reutilizáveis
    ├── pages/      # Componentes que representam as páginas da aplicação
    ├── routes/     # Configuração do roteamento
    ├── App.tsx     # Componente principal da aplicação
    └── main.tsx    # Ponto de entrada do React
```
