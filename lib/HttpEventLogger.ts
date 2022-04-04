import { Logger } from '@corcc/logger';
import { HttpPrinter, HttpParams } from './Logger';

export function defaultHttpEventPrint ({ req, res }:HttpParams) {}
export type HttpEventPrinter = {
	end?:HttpPrinter
	data?:HttpPrinter
	error?:HttpPrinter
}
export const defaultHttpEventLog = {
	end: defaultHttpEventPrint,
	data: defaultHttpEventPrint,
	error: defaultHttpEventPrint
};

export class HttpEventLogger {
	_logger:Logger = new Logger();

	_end:HttpPrinter = defaultHttpEventPrint
	_data:HttpPrinter = defaultHttpEventPrint
	_error:HttpPrinter = defaultHttpEventPrint
	constructor (
		on?:HttpEventPrinter,
		logger?:Logger
	) {
		if (on?.end) { this.end = on.end; }
		if (on?.data) { this.data = on.data; }
		if (on?.error) { this.data = on.error; }
		if (logger) { this.logger = logger; }
	}

	get logger () { return this._logger; }
	set logger (logger:Logger) { this._logger = logger; }

	get end () { return this._end; }
	set end (end:HttpPrinter) { this._end = end; }
	get data () { return this._data; }
	set data (data:HttpPrinter) { this._data = data; }
	get error () { return this._error; }
	set error (error:HttpPrinter) { this._error = error; }
}
