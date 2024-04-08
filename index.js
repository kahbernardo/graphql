const { ApolloServer, gql } = require("apollo-server");
const { format } = require("date-fns");

const { usuarios, perfis } = require("./types");

const typeDefs = gql`
  # Pontos de entrada da API
  type Usuario {
    id: Int
    nome: String
    salario: Float
    email: String
    idade: Int
    vip: Boolean
    perfil: Perfil
  }
  type Produto {
    nome: String!
    preco: Float!
    desconto: Int
    precoCalculado: Float
    descontoCalculado: Float
  }
  type Perfil {
    id: Int
    nome: String
  }
  type Query {
    ola: String
    rightTime: String
    produto: Produto
    megaSena: [Int]!
    usuarios: [Usuario]
    usuario(id: Int): Usuario
    perfil(id: Int): Perfil
    perfis: [Perfil]
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
  Usuario: {
    perfil(usuario) {
      const sels = perfis.filter((n) => n.id === usuario.perfil_id);
      return sels ? sels[0] : null;
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
    perfil(_, { id }) {
      const selection = perfis.filter((n) => n.id === id);

      return selection ? selection[0] : null;
    },
    perfis() {
      return perfis;
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
