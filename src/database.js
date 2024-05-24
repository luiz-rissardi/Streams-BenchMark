import { MongoClient } from "mongodb";
import { Writable } from "stream"

export class MongoDataBase {
    #client
    constructor(connectionString) {
        this.#client = new MongoClient(process.env.MONGO_CONNECTIONSTRING)
    }

    async connect() {
        try {
            await this.#client.connect();
            const collections = this.#client.db("festajunina").collection("users")
            return {
                table:collections,
                client:this.#client
            }
        } catch (error) {

        }
    }
}