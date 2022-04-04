"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = exports.defaultLog = void 0;
function defaultLog(...printVars) { }
exports.defaultLog = defaultLog;
class Logger {
    _log = defaultLog;
    _info = defaultLog;
    _debug = defaultLog;
    _warn = defaultLog;
    _error = defaultLog;
    constructor(printer) {
        this.log = printer?.log || this.log;
        this.info = printer?.info || this.info;
        this.debug = printer?.debug || this.debug;
        this.warn = printer?.warn || this.warn;
        this.error = printer?.error || this.error;
    }
    get log() { return this._log; }
    set log(log) { this._log = log; }
    get info() { return this._info; }
    set info(info) { this._info = info; }
    get debug() { return this._debug; }
    set debug(debug) { this._debug = debug; }
    get warn() { return this._warn; }
    set warn(warn) { this._warn = warn; }
    get error() { return this._error; }
    set error(error) { this._error = error; }
}
exports.Logger = Logger;
//# sourceMappingURL=Logger.js.map