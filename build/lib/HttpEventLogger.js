"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpEventLogger = exports.defaultHttpEventLog = exports.defaultHttpEventPrint = void 0;
const logger_1 = require("@corcc/logger");
function defaultHttpEventPrint({ req, res }) { }
exports.defaultHttpEventPrint = defaultHttpEventPrint;
exports.defaultHttpEventLog = {
    end: defaultHttpEventPrint,
    data: defaultHttpEventPrint,
    error: defaultHttpEventPrint
};
class HttpEventLogger {
    _logger = new logger_1.Logger();
    _end = defaultHttpEventPrint;
    _data = defaultHttpEventPrint;
    _error = defaultHttpEventPrint;
    constructor(on, logger) {
        if (on?.end) {
            this.end = on.end;
        }
        if (on?.data) {
            this.data = on.data;
        }
        if (on?.error) {
            this.data = on.error;
        }
        if (logger) {
            this.logger = logger;
        }
    }
    get logger() { return this._logger; }
    set logger(logger) { this._logger = logger; }
    get end() { return this._end; }
    set end(end) { this._end = end; }
    get data() { return this._data; }
    set data(data) { this._data = data; }
    get error() { return this._error; }
    set error(error) { this._error = error; }
}
exports.HttpEventLogger = HttpEventLogger;
//# sourceMappingURL=HttpEventLogger.js.map