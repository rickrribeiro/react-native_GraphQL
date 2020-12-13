import {buildSchema} from 'graphql'

const schema = buildSchema(`
    type email{
        email: String
    }

    type Friend {
        id: ID
        firstName: String
        lastName: String
        gender: String
        email: [email]!
    }


    type Query{
        friend: Friend
    }
`
)

module.exports = {
    schema:schema
}