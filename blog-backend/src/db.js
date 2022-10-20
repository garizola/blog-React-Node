import { MongoClient } from 'mongodb';

let db;

async function connectToDb(callback) {
    const client = new MongoClient(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.9yvyhhq.mongodb.net/?retryWrites=true&w=majority`);
    await client.connect();

    db = client.db('mongo-data');
    callback();
}

export {
    db,
    connectToDb,
}






