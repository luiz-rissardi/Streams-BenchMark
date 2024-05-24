import { UserController } from "./controller.js";
import { MongoDataBase } from "./database.js";
import { UserRepository } from "./repository.js";


export class UserFactory {
    static async createInstance() {
        // const database = new MongoDataBase(process.env.MONGO_CONNECTIONSTRING)
        // const { table } = await database.connect();
        const repository = new UserRepository();
        const controller = new UserController(repository);
        return controller;
    }

}