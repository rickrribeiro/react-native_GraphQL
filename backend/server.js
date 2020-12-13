const express = require("express")
const expressQL = require('express-graphql')
const schema = require('./src/schemas/schema')

const app = express();

app.get('/',(req,res)=>{
    res.send("GraphQL")
})

const friendDB = {};

class Friend{
    constructor(id,{firstName,lastName, gender,email}){
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.gender = gender
    }

}

const root = {
   friend: ()=>{
       return{
           "id": 12323321,
           "firstName": 111,
           "lastName":"sadsad",
           "gender":"male",
           "email":"me@me"
       }
   },
   createFriend:({input}) =>{
       let id = require('crypto').randomBytes(10).toString('hex');
       friendDB[id] = input
       return new Friend(id,input)
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