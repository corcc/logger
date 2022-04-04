import http from 'http';
import { defaultHttpEventLog, HttpEventLogger, HttpEventPrinter } from './HttpEventLogger';

export type HttpParams = {
	req?:
		|any
		|http.ClientRequest&{body?:Buffer}
		|http.IncomingMessage&{body?:Buffer}
		|http.OutgoingMessage&{body?:Buffer}
	res?:
		|any
		|http.ServerResponse&{body?:Buffer}
		|http.IncomingMessage&{body?:Buffer}
		|http.OutgoingMessage&{body?:Buffer}
}

export type HttpPrinter = ({ req, res }:HttpParams, ...anyParams:any[])=>void

export class HttpLogger {
	_req:HttpEventPrinter = defaultHttpEventLog
	_res:HttpEventPrinter = defaultHttpEventLog

	constructor (on?:{
		req?:HttpEventPrinter
		res?:HttpEventPrinter
	}) {
		if (on?.req) { this.req = on?.req; }
		if (on?.res) { this.res = on?.res; }
	}

	get req () { return this._req; }
	set req (req:HttpEventPrinter) { this._req = new HttpEventLogger(req); }
	get res () { return this._res; }
	set res (res:HttpEventPrinter) { this._res = new HttpEventLogger(res); }
}
