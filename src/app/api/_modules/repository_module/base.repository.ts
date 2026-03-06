import {LoggerServiceFactory} from "@/app/api/_modules/logger_module/logger.factory";
import {ILoggerService}       from "@/app/api/_modules/logger_module/logger.interface";
import {IRepository}          from "@/app/api/_modules/repository_module/repository.interface";



export class BaseRepository {

	private static instance: BaseRepository | undefined;
	protected readonly _logger: ILoggerService;
	protected readonly _orm: unknown

	protected constructor(
		logger: ILoggerService,
		orm: any
	) {
		this._logger = logger
		this._orm    = orm

	}

	public static getInstance(): BaseRepository {
		if (!this.instance) {
			this.instance = new BaseRepository(
				LoggerServiceFactory.getLogger(),
				undefined
			)
		}

		return this.instance
	}

	get orm() {
		return this._orm;
	}

	get logger() {
		return this._logger;
	}

}



export class RepositoryError extends Error {
	private readonly context: Record<string, any> = {}
	private readonly operation: string;

	constructor(
		message: string,
		operation: string,
		context: Record<string, any> = {}
	) {
		super(message)
		this.operation = operation
		this.context   = context
	}

	toString() {
		return {
			message  : this.message,
			operation: this.operation,
			context  : this.context
		}
	}
}