const mongoose = require('mongoose')

let db =mongoose.connection
const connection = "mongodb+srv://snfz:sbsb233@cluster0.ineh3.mongodb.net/sample_airbnb?retryWrites=true&w=majority"
mongoose.connect(connection, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: true
})

db.on('error', console.error.bind(console, 'connection error:'))

db.once('open',function(){
    console.log("connection true")
})

// 完整的schema
let listingsAndReviews = mongoose.Schema({
    name:String,
    summary:String
})

let listingsAndReview = mongoose.model('listingsAndReviews',listingsAndReviews)
listingsAndReview.find((err,bnb)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(bnb)
        db.close()
    }
})