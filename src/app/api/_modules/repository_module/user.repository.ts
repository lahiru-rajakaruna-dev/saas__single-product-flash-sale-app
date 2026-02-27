import {LoggerServiceFactory} from "@/app/api/_modules/logger_module/logger.factory";
import {OrmServiceFactory}    from "@/app/api/_modules/orm_module/orm.factory";
import {IOrmService}          from "@/app/api/_modules/orm_module/orm.interface";
import {
	BaseRepository,
	RepositoryError
}                             from "@/app/api/_modules/repository_module/abstract.repository";
import {
	TInsertUser,
	TSelectUser,
	TUpdateUser
}                             from "@drizzle/schema";



export class UserRepository
	extends BaseRepository<TSelectUser, TUpdateUser, TInsertUser> {
	private static instance: UserRepository

	private constructor(orm: IOrmService) {
		super(
			LoggerServiceFactory.getLogger(),
			orm
		)
	}

	public static async getInstance() {
		if (!this.instance) {
			const orm     = await OrmServiceFactory.getService()
			this.instance = new UserRepository(orm)
		}

		return this.instance
	}

	async deleteOne(
		userID: string,
		id?: string
	): Promise<boolean> {
		if (!userID) {
			throw new RepositoryError(
				'USER_ID not provided',
				'delete_one'
			)
		}

		const result = await this.orm.deleteUserById(userID)
		return this.logger.logAndReturn(
			result,
			'operation: delete_one'
		)
	}

	async createOne(
		userID: string,
		data: TInsertUser
	): Promise<TSelectUser> {
		if (!userID) {
			throw new RepositoryError(
				'USER_ID not provided',
				'create_one'
			)
		}

		if (Object.entries(data).length <= 0) {
			throw new RepositoryError(
				'Invalid data',
				'create_one'
			)
		}

		const result = await this.orm.createUser({...data, user_id: userID})
		return this.logger.logAndReturn(
			result,
			'create_one'
		)
	}

	async getAll(): Promise<TSelectUser[]> {
		const result = await this.orm.getUsers()
		return this.logger.logAndReturn(
			result,
			'operation: get_all'
		);
	}

	async getOne(id: string): Promise<TSelectUser | undefined> {
		if (!id) {
			throw new RepositoryError(
				'ID not provided',
				'get_one'
			)
		}

		const result = await this.orm.getUserById(id)
		return this.logger.logAndReturn(
			result,
			'operation: get_one'
		)
	}

	async updateOne(
		userID: string,
		id: string,
		updates: TUpdateUser
	): Promise<TSelectUser | undefined> {
		if (!userID) {
			throw new RepositoryError(
				'USER_ID not provided',
				'update_one'
			)
		}

		if (Object.entries(updates).length <= 0) {
			throw new RepositoryError(
				'Invalid updates',
				'update_one'
			)
		}

		const result = await this.orm.updateUserById(
			userID,
			updates
		)

		return this.logger.logAndReturn(
			result,
			'operation: update_one'
		)
	}

}