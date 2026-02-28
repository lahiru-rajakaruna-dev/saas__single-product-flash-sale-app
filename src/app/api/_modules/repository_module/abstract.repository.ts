import {ILoggerService} from "@/app/api/_modules/logger_module/logger.interface";
import {IOrmService}    from "@/app/api/_modules/orm_module/orm.interface";



export class BaseRepository<TOrmDriver> {

	private readonly _logger: ILoggerService;
	private readonly _orm: IOrmService<TOrmDriver>

	protected constructor(
		logger: ILoggerService,
		orm: IOrmService<TOrmDriver>
	) {
		this._logger = logger
		this._orm    = orm
	}

	get logger(): ILoggerService {
		return this._logger
	}

	get orm(): IOrmService<TOrmDriver> {
		return this._orm
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