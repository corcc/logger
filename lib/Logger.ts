export type Printer = ((...printVars:any[])=>void)
export function defaultLog (...printVars:any[]) {}
export class Logger {
	private _log:Printer = defaultLog
	private _info:Printer = defaultLog
	private _debug:Printer = defaultLog
	private _warn:Printer = defaultLog
	private _error:Printer = defaultLog

	constructor (
		printer?:{
			log?:Printer, info?:Printer, debug?:Printer,
			warn?:Printer, error?:Printer
	}) {
		this.log = printer?.log || this.log;
		this.info = printer?.info || this.info;
		this.debug = printer?.debug || this.debug;
		this.warn = printer?.warn || this.warn;
		this.error = printer?.error || this.error;
	}

	get log ():Printer { return this._log; }
	set log (log:Printer) { this._log = log; }

	get info ():Printer { return this._info; }
	set info (info:Printer) { this._info = info; }

	get debug ():Printer { return this._debug; }
	set debug (debug:Printer) { this._debug = debug; }

	get warn ():Printer { return this._warn; }
	set warn (warn:Printer) { this._warn = warn; }

	get error ():Printer { return this._error; }
	set error (error:Printer) { this._error = error; }
}
