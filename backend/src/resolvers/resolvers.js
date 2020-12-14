import {Friends} from '../models/model'

const resolvers = { 
    getFriend: ({ id }) => {
        return new Promise((resolve, object)=>{
            Friends.findById(id,(err,friend)=>{
                if(err){
                    console.log("err"+err)
                    reject(err)
                }else{
                    resolve(friend)
                }
            })
        })
    },
    getAll: () => {
        return new Promise((resolve, object)=>{
            Friends.find((err,friend)=>{
                if(err){
                    console.log("err"+err)
                    reject(err)
                }else{
                    resolve(friend)
                }
            })
        })
    },
    getByAge: ({age}) => {
        return new Promise((resolve, object)=>{
            Friends.find({'age':age},(err,friend)=>{
                if(err){
                    console.log("err"+err)
                    reject(err)
                }else{
                    resolve(friend)
                }
            })
        })
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
    },
    updateFriend:({input}) =>{
        return new Promise((resolve, object)=>{
            Friends.findOneAndUpdate({_id:input.id},input,{new:true},(err,friend)=>{
                if(err){
                    console.log("err"+err)
                    reject(err)
                }else{
                    resolve(friend)
                }
            })
        })
    },
    deleteFriend:({id}) =>{
        return new Promise((resolve, object)=>{
            Friends.remove({_id:id},(err)=>{
                if(err){
                    console.log("err"+err)
                    reject(err)
                }else{
                    resolve("Deleted")
                }
            })
        })
    }
};

export default resolvers;