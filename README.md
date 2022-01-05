# PalpiteBox - Fullstack Master

Este projeto foi construído durante a Semana Fullstack Master do [DevPleno](https://devpleno.com) Consiste numa caixa de sugestões na qual os clientes podem deixar opiniões e sugestões sobre os estabelecimentos comerciais e, em troca, receber cupons de descontos e vantagens. A aplicação conta com integração à uma Planilha do Google, na qual o dono do estabelecimento pode definir as configurações do cupom de desconto, além de ter a listagem completa dos clientes e suas avaliações.

Uma versão online deste projeto pode ser encontrada em: https://palpite-box-leobtt.vercel.app/.

![Preview](https://user-images.githubusercontent.com/54782652/148142425-253ccb9e-bc41-40b5-b2c3-d2ae6ad46e30.gif)

## Construído com:

- [NextJS](https://nextjs.org/) -The React Framework.
- [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework for
  rapidly building custom designs.
- [Figma](https://figma.com/) - Online prototyping tool.
- [Google Sheets](https://drive.google.com) - Google online spreadsheets
- [Momentjs](https://momentjs.com/) - Workink with dates
- [SWR](https://swr.vercel.app/)

## Início

### Pré-requisitos:

Você precisa do NodeJS e do NPM instalado em sua máquina.

```
npm install
npm run dev
```

## Layout:

Criamos o layout utilizando o Figma. Você pode encontrar o arquivo [aqui](https://www.figma.com/file/HxvAYhS6l7UDI49u8uLdaC/palpite-box?node-id=0%3A1).

## Colocando em produção:

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
