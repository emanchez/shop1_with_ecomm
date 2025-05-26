import { MongoClient } from "mongodb";

const URI = process.env.MONGODB_URI; // Standard naming convention
const options = {};

if (!URI) throw new Error('Please add your Mongo URI to .env.local');

let client;
let clientPromise: Promise<MongoClient>;

const globalWithMongo = global as typeof globalThis & {
_mongoClientPromise: Promise<MongoClient>
}

if (process.env.NODE_ENV === 'development') {
    // In development mode, use a global variable to preserve the connection
    if (!globalWithMongo._mongoClientPromise) {
        client = new MongoClient(URI, options);
        globalWithMongo._mongoClientPromise = client.connect();
    }
    clientPromise = globalWithMongo._mongoClientPromise;
} else {
    // In production mode, create a new connection
    client = new MongoClient(URI, options);
    clientPromise = client.connect();
}

export default clientPromise;
