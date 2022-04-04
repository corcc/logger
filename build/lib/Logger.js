"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpLogger = void 0;
const HttpEventLogger_1 = require("./HttpEventLogger");
class HttpLogger {
    _req = new HttpEventLogger_1.HttpEventLogger();
    _res = new HttpEventLogger_1.HttpEventLogger();
    constructor(on) {
        if (on?.req) {
            this.req = on?.req;
        }
        if (on?.res) {
            this.res = on?.res;
        }
    }
    get req() { return this._req; }
    set req(req) { this._req = new HttpEventLogger_1.HttpEventLogger(req); }
    get res() { return this._res; }
    set res(res) { this._res = new HttpEventLogger_1.HttpEventLogger(res); }
}
exports.HttpLogger = HttpLogger;
//# sourceMappingURL=Logger.js.map