import {ILoggerService} from "@/app/api/_modules/logger_module/logger.interface";
import {IOrmService}    from "@/app/api/_modules/orm_module/orm.interface";
import {IRepository}    from "@/app/api/_modules/repository_module/repository.interface";



export abstract class BaseRepository<TSelect, TUpdate, TInsert>
	implements IRepository<TSelect, TUpdate, TInsert> {

	protected readonly logger: ILoggerService;
	protected readonly orm: IOrmService

	protected constructor(
		logger: ILoggerService,
		orm: IOrmService
	) {
		this.logger = logger
		this.orm    = orm
	}

	abstract deleteOne(
		userID: string,
		id: string
	): Promise<boolean>

	abstract createOne(
		userID: string,
		data: TInsert
	): Promise<TSelect>

	abstract getAll(userID: string): Promise<TSelect[]>

	abstract getOne(
		userID: string,
		id: string
	): Promise<TSelect | undefined>

	abstract updateOne(
		userID: string,
		id: string,
		updates: TUpdate
	): Promise<TSelect | undefined>

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