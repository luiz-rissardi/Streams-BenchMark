import { Router } from "express";

export class RouterApp {

    #controller
    constructor(userController) {
        this.#controller = userController;
    }

    getRoutes() {
        const routes = Router();

        routes.route("/user").get((req, res) => {
            this.#controller.findAll(req,res)
        })

        return routes
    }
}