const { ApolloServer, gql } = require("apollo-server");
const { format } = require("date-fns");

const typeDefs = gql`
  # Pontos de entrada da API
  type Query {
    ola: String
    rightTime: String
  }
`;

const resolvers = {
  Query: {
    ola() {
      return "Bom dia!";
    },
    rightTime() {
      return `${format(new Date(), "HH:mm")}`;
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
