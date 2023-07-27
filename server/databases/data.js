import mongoose from "mongoose"

const Connection = async (username,password) => {
    const URL =`mongodb://${username}:${password}@ac-gypryf1-shard-00-00.i0ewnie.mongodb.net:27017,ac-gypryf1-shard-00-01.i0ewnie.mongodb.net:27017,ac-gypryf1-shard-00-02.i0ewnie.mongodb.net:27017/?ssl=true&replicaSet=atlas-j73w86-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try {
        await mongoose.connect(URL, { useNewUrlParser: true });
        console.log('Database connected successfully');
    }
        catch (error) { 
        console.log('Error while connecting to the database ', error);
    }
};
export default Connection;