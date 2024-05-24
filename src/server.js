import express from "express";
import expressStatusMonitor from "express-status-monitor";
import { createServer } from "http"
import { RouterApp } from "./routes.js";
import { config } from "dotenv";
import { UserFactory } from "./factory.js";
import compression from "compression";
config();

const app = express();
const server = createServer(app);

// initi dependecies
const controller = await UserFactory.createInstance();
const routes = new RouterApp(controller).getRoutes();
app.use(routes);
app.use(compression());
app.use(expressStatusMonitor())

server
    .listen(3000)
    .on("listening", () => {
        console.log("server is running at 3000");
    })

