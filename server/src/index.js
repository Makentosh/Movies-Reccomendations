const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const http = require('http');
const path = require('path');
const fs = require('fs');

const {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageLocalDefault,
} = require('apollo-server-core');

const Query = require('./resolvers/Query');

const resolvers = {
  Query
};

const typeDefs = fs.readFileSync(
  path.join(__dirname, 'schema.graphql'),
  'utf8'
);

const context = ({ req, res }) => ( {
  locale: req?.headers?.locale || 'en-US'
} );


async function startApolloServer(typeDefs, resolvers) {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context,
    csrfPrevention: true,
    cache: 'bounded',
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
  });
  await server.start();
  server.applyMiddleware({ app });


  app.use(express.static(path.join(__dirname, '../../client', 'build')));
  app.use(express.static('public'));

  app.get('/rest', function (req, res) {

    return res.json({ data: 'rest' });
  });

  app.get('*', function (req, res) {
    const productionBuild = path.join(__dirname, '../../client', 'build', 'index.html');
    return res.sendFile(productionBuild);
  });

  const PORT = 80;

  await new Promise(resolve => httpServer.listen({ port: process.env.PORT || PORT }, resolve));
  console.log(`🚀 Server ready at http://localhost:${ process.env.PORT || PORT }${ server.graphqlPath }`);
}

startApolloServer(typeDefs, resolvers);
