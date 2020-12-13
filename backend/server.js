const express = require("express")
const app = express();
const expressQL = require('express-graphql')
const schema = require('./src/schemas/schema')


app.get('/',(req,res)=>{
    res.send("GraphQL")
})

const root = {
   friend: ()=>{
       return{
           "id": 12323321,
           "firstName": 111,
           "lastName":"sadsad",
           "gender":"male",
           "email":[{"email":"name@me.com"},{"email":"name@me2com"}]
       }
   } 
}

app.use('/graphql', expressQL.graphqlHTTP({
    schema:schema.schema,
    rootValue: root,
    graphiql:true
}))

const server = app.listen(8080, ()=>{
    console.log(`running on port ${server.address().port}`)
})