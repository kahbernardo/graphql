const { ApolloServer, gql } = require("apollo-server");
const { format } = require("date-fns");

const { usuarios, perfis } = require("./data/db");
const { importSchema } = require("graphql-import");
const resolvers = require("./resolvers");

const server = new ApolloServer({
  typeDefs: importSchema("./schema/index.graphql"),
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Executando em ${url}`);
});
