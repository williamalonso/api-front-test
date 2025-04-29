<p align="center">
  <img src="https://app.landingpage.com.br/construtor/assets/imagens/By.png" width="350" title="hover text">
</p>

### 🤔 Sobre o Sistema?

Este projeto é uma API intermediária criada para contornar o problema de CORS presente no endpoint de checkout do desafio técnico de frontend.  
A API funciona como um proxy: ela recebe requisições do frontend e repassa os dados para a API original de checkout, garantindo que a chamada funcione corretamente em ambiente local ou de desenvolvimento.

---

## 🚀 Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en)

---

### ✨ Sobre a construção do projeto:

- A API foi criada usando rotas do Next.js (`pages/api`);
- Headers CORS foram configurados para permitir requisições de qualquer origem (`Access-Control-Allow-Origin: *`);
- A rota `/api/checkout` aceita requisições `POST` com os dados do produto e encaminha esses dados para a API original de checkout;
- Também trata requisições `OPTIONS` para compatibilidade com o pré-flight do CORS;
- Logs úteis foram adicionados para facilitar o debug durante o desenvolvimento;

---

## 🙅 Instalações e usos:

1. Clone o repositório:

```bash
git clone git@github.com:seu-usuario/api-front-test.git
```

2. Instale as dependências:

```bash
npm install
```

3. Rode o ambiente de desenvolvimento:

```bash
npm run dev
```

A API estará disponível em `http://localhost:3000/api/checkout`.

---

## 🔌 Estrutura esperada no payload:

O `POST` na rota `/api/checkout` deve conter um array de objetos no seguinte formato:

````javascript
[{
  "values": ["Preto", "P"],
  "quantity": 1,
  "product_id": 1,
  "variant_id": 1
}]
````

Este payload será redirecionado para a seguinte URL da API de checkout original:
`https://app.landingpage.com.br/api/checkoutloja/LPL2gc/5d87eb644e5631bc6a03f1e43a804e1c`

<h3 align="center">William Alonso</h3>
