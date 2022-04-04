import { Logger } from '@corcc/logger';
import { HttpPrinter, HttpParams } from './Logger';
export declare function defaultHttpEventPrint({ req, res }: HttpParams): void;
export declare type HttpEventPrinter = {
    end: HttpPrinter;
    data: HttpPrinter;
    error: HttpPrinter;
};
export declare const defaultHttpEventLog: {
    end: typeof defaultHttpEventPrint;
    data: typeof defaultHttpEventPrint;
    error: typeof defaultHttpEventPrint;
};
export declare class HttpEventLogger {
    _logger: Logger;
    _end: HttpPrinter;
    _data: HttpPrinter;
    _error: HttpPrinter;
    constructor(on?: {
        end?: HttpPrinter;
        data?: HttpPrinter;
        error?: HttpPrinter;
    }, logger?: Logger);
    get logger(): Logger;
    set logger(logger: Logger);
    get end(): HttpPrinter;
    set end(end: HttpPrinter);
    get data(): HttpPrinter;
    set data(data: HttpPrinter);
    get error(): HttpPrinter;
    set error(error: HttpPrinter);
}
//# sourceMappingURL=HttpEventLogger.d.ts.map