const mongoose = require('mongoose')
const connectionString = process.env.DB_CONNECTION_STRING
mongoose.connect(connectionString).then((res)=>{
    console.log("style guru server successfuly connected to to mongodb atlas");
}).catch((reason)=>{
    console.log("MOngoodb conncetin failed");
    console.log(reason);
})