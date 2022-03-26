<h1 align="center">
    <img alt="palpite" title="#palpite" src="https://palpite-box.tuliofaria.dev/logo_palpitebox.png"/>
</h1>

<h2 align="center"> Palpite Box - FSM </h2>

---

Este projeto foi construído durante a Semana Fullstack Master do [DevPleno](https://devpleno.com) Consiste numa caixa de sugestões na qual os clientes podem deixar opiniões e sugestões sobre os estabelecimentos comerciais e, em troca, receber cupons de descontos e vantagens. A aplicação conta com integração à uma Planilha do Google, na qual o dono do estabelecimento pode definir as configurações do cupom de desconto, além de ter a listagem completa dos clientes e suas avaliações.

Uma versão online deste projeto pode ser encontrada em: https://palpite-box-leobtt.vercel.app/.

![palpiteBox](https://user-images.githubusercontent.com/54782652/160255811-bc200ea7-382d-46ce-8f88-355610572150.gif)

## 🚀 Construído com:

- [NextJS](https://nextjs.org/) -The React Framework.
- [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework for
  rapidly building custom designs.
- [Figma](https://figma.com/) - Online prototyping tool.
- [Google Sheets](https://drive.google.com) - Google online spreadsheets
- [Momentjs](https://momentjs.com/) - Working with dates
- [React Hook Form](https://react-hook-form.com/get-started) - Forms
- [SWR](https://swr.vercel.app/)

## 🏃 Início

### ✔️ Pré-requisitos:

Você precisa do NodeJS e do NPM instalado em sua máquina.

```
npm install
npm run dev
```

## 🔖 Layout:

Criamos o layout utilizando o Figma. Você pode encontrar o arquivo [aqui](https://www.figma.com/file/HxvAYhS6l7UDI49u8uLdaC/palpite-box?node-id=0%3A1).

## 🎯 Colocando em produção:

Este projeto pode ser colocado em produção utilizando o Vercel. É necessário criar as variáveis de ambiente para configurar o acesso as planilhas do Google:

```
SHEET_CLIENT_EMAIL=client email do service credential
SHEET_PRIVATE_KEY=private key do service credential - lembrar de substituir \n por quebras de linha e de codificar em base 64
SHEET_DOC_ID=id da planilha
```

## Author:

- **Leonardo Batista** - [LinkedIn](https://www.linkedin.com/in/leobtt/)

## Licença

Este projeto é licenciado sobre a licença MIT - veja [LICENSE.md](LICENSE.md) para mais informações.

## Acknowledgments

- Este projeto foi construído durante a Semana Fullstack Master do [DevPleno](https://devpleno.com).
