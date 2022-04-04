import http from 'http';
import { HttpEventLogger, HttpEventPrinter } from './HttpEventLogger';

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
	_req:HttpEventPrinter = new HttpEventLogger()
	_res:HttpEventPrinter = new HttpEventLogger()

	constructor (on?:{
		req?:HttpEventPrinter
		res?:HttpEventPrinter
	}) {
		if (on?.req) { this.req = on?.req; }
		if (on?.res) { this.res = on?.res; }
	}

	get req ():HttpEventPrinter { return this._req; }
	set req (req:HttpEventPrinter) { this._req = new HttpEventLogger(req); }
	get res ():HttpEventPrinter { return this._res; }
	set res (res:HttpEventPrinter) { this._res = new HttpEventLogger(res); }
}
