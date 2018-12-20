import bodyParser from "body-parser";
import express from "express";

export class Server {

    private appServer: any;

    constructor() {
    }

    start(callback) {
        this.startServer(callback);
    }

    startServer(callback) {

        this.startExpressApp((error, app, appServer) => {
            if (error) {
                callback(error);
                return;
            }

            this.appServer = appServer;
            if (callback) {
                callback();
            }
        });
    }

    stop() {
        this.appServer.close();
    }

    startExpressApp(callback) {
        this.createExpressApp((error, app) => {
            if (error) {
                return callback(error);
            }

            const port = 8090;
            const appServer = app.listen(port);
            callback(undefined, app, appServer);
        });
    }

    createExpressApp(callback) {
        /****************************************
         * Create and configure express.js app
         ****************************************/
        const expressApp = express();
        // body parsers must be registered before logger middlewares (if not, body is empty and can not be logged)
        expressApp.use(bodyParser.json());


        // Removes header x-powered-by: express
        expressApp.disable("x-powered-by");

    }
}
