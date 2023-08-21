const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://40thomasroy:40Thomasroy@cluster0.klekhm5.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

client.connect();

module.exports = client;