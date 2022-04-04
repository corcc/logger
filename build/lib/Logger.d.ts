export declare type Printer = ((...printVars: any[]) => void);
export declare function defaultLog(...printVars: any[]): void;
export declare class Logger {
    private _log;
    private _info;
    private _debug;
    private _warn;
    private _error;
    constructor(printer?: {
        log?: Printer;
        info?: Printer;
        debug?: Printer;
        warn?: Printer;
        error?: Printer;
    });
    get log(): Printer;
    set log(log: Printer);
    get info(): Printer;
    set info(info: Printer);
    get debug(): Printer;
    set debug(debug: Printer);
    get warn(): Printer;
    set warn(warn: Printer);
    get error(): Printer;
    set error(error: Printer);
}
//# sourceMappingURL=Logger.d.ts.map