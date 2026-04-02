import { MongoClient } from "mongodb";

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

export const getMongoClient = async () => {
  const uri = process.env.MONGODB_URI;


  if (!uri) {
    throw new Error("Missing MONGODB_URI environment variable.");
  }

  if (!global._mongoClientPromise) {
    const client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }

  return global._mongoClientPromise;
};
