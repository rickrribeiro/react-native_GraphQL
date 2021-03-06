import {buildSchema} from 'graphql'

const schema = buildSchema(`
    

type Friend {
    id: ID
    firstName: String
    lastName: String
    gender: Gender
    age: Int
    email: String
    contacts:[Contact]
}

type Contact {
    firstName: String
    lastName: String
}

    enum Gender{
        MALE
        FEMALE
        OTHER
    }

    type Query{
        getFriend(id: ID): Friend
        getAll: [Friend]
        getByAge(age: Int):[Friend]
    }

    input FriendInput{
        id: ID
        firstName: String
        lastName: String
        gender: Gender
        age: Int
        email: String
        contacts: [ContactInput]
    }

    input ContactInput{
        firstName: String
        lastName: String
    }

    type Mutation {
        createFriend(input: FriendInput): Friend
        updateFriend(input:FriendInput):Friend
        deleteFriend(id: ID!): String
    }

`
)

export default schema