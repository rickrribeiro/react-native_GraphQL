const mongoose = require('mongoose')
const config = require('../config/config.json')
const {Schema} = mongoose

mongoose.set('useNewUrlParser',true) // have to use to dont get errors
mongoose.set('useCreateIndex',true)
mongoose.set('useUnifiedTopology',true)

mongoose.Promise = global.Promise
if(config.db.connectionString){
    mongoose.connect(config.db.connectionString, (err)=>{
        if(err) console.log("erro ao conectar" + err)
    })
}else{
    console.log("You need to add a connection string at src/config/db-config.json")
}


const friendSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    gender: {
        type: String
    },
    age: {
        type: Number
    },
    email: {
        type: String
    },
    contacts: {
        type: Array
    }
})

const Friends =  mongoose.model('friends',friendSchema)

export {Friends};