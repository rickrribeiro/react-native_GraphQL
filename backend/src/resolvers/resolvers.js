import {Friends} from '../models/model'

const resolvers = { 
    getFriend: ({ id }) => {
        return new Friend(id, friendDatabase[id]);
    },
    createFriend: ({ input }) => {
        
            const newFriend = new Friends({

                firstName:input.firstName,
                lastName: input.lastName,
                gender: input.gender,
                email: input.email,
                age: input.age,
                contacts: input.contacts
            })
            newFriend.id = newFriend._id
            console.log(newFriend._id)
            return new Promise((resolve,object)=>{
              
                newFriend.save((err) =>{
                        if(err){
                            console.log("err"+err)
                            reject(err)
                        }else{
                            resolve(newFriend)
                        }
                })
            })
    }
};

export default resolvers;