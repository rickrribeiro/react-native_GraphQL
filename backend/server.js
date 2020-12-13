import express from 'express';
const  expressQL =  require('express-graphql');
import schema from './src/schemas/schema';
import resolvers from './src/resolvers/resolvers';

const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL is amazing!');
});

const root = resolvers;

app.use('/graphql',expressQL.graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(8080, () => console.log('Running server on port localhost:8080/graphql'));