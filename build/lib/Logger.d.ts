/// <reference types="node" />
import http from 'http';
import { HttpEventPrinter } from './HttpEventLogger';
export declare type HttpParams = {
    req?: any | http.ClientRequest & {
        body?: Buffer;
    } | http.IncomingMessage & {
        body?: Buffer;
    } | http.OutgoingMessage & {
        body?: Buffer;
    };
    res?: any | http.ServerResponse & {
        body?: Buffer;
    } | http.IncomingMessage & {
        body?: Buffer;
    } | http.OutgoingMessage & {
        body?: Buffer;
    };
};
export declare type HttpPrinter = ({ req, res }: HttpParams, ...anyParams: any[]) => void;
export declare class HttpLogger {
    _req: HttpEventPrinter;
    _res: HttpEventPrinter;
    constructor(on?: {
        req?: HttpEventPrinter;
        res?: HttpEventPrinter;
    });
    get req(): HttpEventPrinter;
    set req(req: HttpEventPrinter);
    get res(): HttpEventPrinter;
    set res(res: HttpEventPrinter);
}
//# sourceMappingURL=Logger.d.ts.map