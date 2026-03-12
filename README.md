<<<<<<< HEAD
# Desafio Técnico – QA Pleno (Playwright + JavaScript)

Este projeto contém a automação dos cenários Web do site `https://www.saucedemo.com` utilizando **Playwright** com **JavaScript** e padrão **Page Object Model (POM)**.

## Pré-requisitos

- Node.js instalado (versão LTS recomendada)
- NPM configurado no PATH

## Instalação

No diretório do projeto:

```bash
npm install
```

## Execução dos testes

Para rodar todos os testes:

```bash
npx playwright test
```

ou utilizando o script do `package.json`:

```bash
npm test
```

Os testes utilizam o ambiente padrão do Playwright (headless). O `baseURL` configurado é:

- `https://www.saucedemo.com`

## Estrutura do projeto

- `pages/`
  - `LoginPage.js` – elementos e ações da página de login.
  - `ProductsPage.js` – elementos e ações da página de produtos.
  - `CartPage.js` – elementos e ações da página de carrinho.
- `tests/`
  - `login-success.spec.js` – cenário de login com sucesso.
  - `login-invalid.spec.js` – cenário de login inválido.
  - `add-to-cart.spec.js` – cenário de adicionar produto ao carrinho.
- `playwright.config.js` – configuração do Playwright (diretório de testes, `baseURL`, timeout, etc.).
- `package.json` – dependências e scripts de execução.

## Cenários cobertos

1. **Login com sucesso**
   - Acessa o site.
   - Realiza login com usuário `standard_user` e senha `secret_sauce`.
   - Valida redirecionamento para a página de produtos.

2. **Login inválido**
   - Acessa o site.
   - Tenta login com credenciais inválidas.
   - Valida que a mensagem de erro é exibida.

3. **Adicionar produto ao carrinho**
   - Realiza login com usuário válido.
   - Adiciona o produto **"Sauce Labs Backpack"** ao carrinho.
   - Acessa o carrinho e valida que o produto foi adicionado.

## Observações

- O projeto utiliza apenas **JavaScript** (sem TypeScript), conforme requisitos.
- O padrão **Page Object Model (POM)** é utilizado para separar lógica de páginas dos testes.
- A configuração está preparada para execução paralela dos testes (via `fullyParallel: true`).

=======
# TesteSauceDemo
Teste de API com Playwright com Javascript do site saucedemo
>>>>>>> a501af858ecffb0139042392dd9850dc2d625d81
