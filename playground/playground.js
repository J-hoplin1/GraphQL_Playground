const express = require('express');
const env = require('dotenv');
const logger = require('morgan');
const { ApolloServer, gql } = require('apollo-server-express')

env.config();

const define = gql`
type Query{
    hello: String
}
`;
const resolve ={
    Query: {
        hello: () => "Hello GraphQL"
    }
};

const apolloServer = new ApolloServer({typeDefs:define,resolvers:resolve})
const app = express();

apolloServer.start()
.then(res => {
    app.use(logger(process.env.STATUS || 'dev'));
    apolloServer.applyMiddleware({
        app,
        path:'/'
    });
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Server listening on port ${process.env.PORT}`)
    })
})
.catch(err => {
    console.log(err);
});

