import { config } from "dotenv";
import { MongoDataBase } from "./database.js";
config();

const database = new MongoDataBase(process.env.MONGO_CONNECTIONSTRING)
const { client, table } = await database.connect();

const data = await table.find().toArray();
client.close()
console.log(data);
