const { ApolloServer, gql } = require("apollo-server");
const { format } = require("date-fns");

const usuarios = [
  {
    id: 1,
    nome: "João",
    email: "joao@abc.com",
    idade: 25,
  },
  {
    id: 2,
    nome: "Maria",
    email: "maria@abc.com",
    idade: 33,
  },
  {
    id: 3,
    nome: "Pedro",
    email: "pedro@abc.com",
    idade: 42,
  },
  {
    id: 4,
    nome: "Ana",
    email: "ana@abc.com",
    idade: 20,
  },
  {
    id: 5,
    nome: "Carlos",
    email: "carlos@abc.com",
    idade: 55,
  },
];

const typeDefs = gql`
  # Pontos de entrada da API
  type Usuario {
    id: Int
    nome: String
    salario: Float
    email: String
    idade: Int
    vip: Boolean
  }
  type Produto {
    nome: String!
    preco: Float!
    desconto: Int
    precoCalculado: Float
    descontoCalculado: Float
  }

  type Query {
    ola: String
    rightTime: String
    produto: Produto
    megaSena: [Int]!
    usuarios: [Usuario]
    usuario(id: Int): Usuario
  }
`;

const resolvers = {
  Produto: {
    precoCalculado(produto) {
      return parseFloat(
        produto.preco - produto.preco * (0.01 * produto.desconto)
      );
    },
    descontoCalculado(produto) {
      return parseFloat(produto.preco * (0.01 * produto.desconto));
    },
  },
  Query: {
    ola() {
      return "Bom dia!";
    },
    rightTime() {
      return `${format(new Date(), "HH:mm")}`;
    },
    usuario() {
      return {
        id: 1,
        nome: "user teste",
        email: "abc@abc.com",
        idade: 29,
        salario: 1234.56,
        vip: true,
      };
    },
    produto() {
      return {
        nome: "Sabão",
        preco: 10.0,
        desconto: 5,
      };
    },
    megaSena() {
      const assign = (x, y) => x - y;
      let numeros = new Set();

      while (numeros.size < 6) {
        let numero = parseInt(Math.random() * 60 + 1);
        numeros.add(numero);
      }

      return Array.from(numeros).sort(assign);
    },
    usuarios() {
      return usuarios;
    },
    usuario(_, { id }) {
      const selection = usuarios.filter((n) => n.id === id);

      return selection ? selection[0] : null;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Executando em ${url}`);
});
