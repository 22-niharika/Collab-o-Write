import mongoose from 'mongoose'; 

const Connection = async (username= 'user1', password='Liza021222') =>{
    const URL =`mongodb+srv://${username}:${password}@google-docs-clone.4umyybz.mongodb.net/?retryWrites=true&w=majority`;

    try{
        await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
        console.log("Database connected successfully");
    }catch(error){
        console.log("Error while connecting to the database", error);
    }
}

export default Connection;