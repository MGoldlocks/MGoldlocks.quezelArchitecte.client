"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
class Server {
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
        const expressApp = express_1.default();
        // body parsers must be registered before logger middlewares (if not, body is empty and can not be logged)
        expressApp.use(body_parser_1.default.json());
        // Removes header x-powered-by: express
        expressApp.disable("x-powered-by");
    }
}
exports.Server = Server;
//# sourceMappingURL=Server.js.map