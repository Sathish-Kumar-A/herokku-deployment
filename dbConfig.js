const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const db_url = "mongodb+srv://sathishkumar:sathish25@cluster0.mkek8.mongodb.net/nodemongoconnect";

// const getCollection = async(collectionName) => {
//     const client =await MongoClient.connect(db_url);
//     const db =await client.db("testing1");
//     const collection = await db.collection(collectionName);
//     return {collection:collection,client:client};
// }
module.exports = {db_url};