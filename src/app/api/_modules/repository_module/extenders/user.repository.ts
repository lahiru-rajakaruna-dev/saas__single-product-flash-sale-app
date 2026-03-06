import {TDrizzleOrm} from "@/app/api/_modules/orm_module/drizzle.orm";
import {
	BaseRepository,
	RepositoryError
}                    from "@/app/api/_modules/repository_module/base.repository";
import {
	IRepository,
	IUserManagable
}                    from "@/app/api/_modules/repository_module/repository.interface";
import {
	table_users,
	TInsertUser,
	TSelectUser,
	TUpdateUser
}                    from "@drizzle/schema";
import {eq}          from "drizzle-orm";



export class UserRepository
	implements IUserManagable<TInsertUser, TSelectUser, TUpdateUser> {
	private base_repository: BaseRepository;

	constructor(baseRepository: BaseRepository) {
		this.base_repository = baseRepository
	}

	async deleteUser(
		userID: string,
	): Promise<boolean> {

		if (!userID) {
			throw new RepositoryError(
				'USER_ID not provided',
				'delete_one'
			)
		}

		const result = await (this.base_repository.orm as TDrizzleOrm)
			.delete(table_users)
			.where(
				eq(
					table_users.user_id,
					userID
				)
			)
			.returning()

		this.base_repository.logger.logAndReturn(
			result,
			'operation: delete_one'
		)

		return true
	}

	async createUser(
		data: TInsertUser
	): Promise<TSelectUser> {
		if (!data.user_id) {
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

		const result = await (this.base_repository.orm as TDrizzleOrm)
			.insert(
				table_users
			)
			.values(
				data,
			)
			.returning()

		return this.base_repository.logger.logAndReturn(
			result[0],
			'create_one'
		)
	}

	async getAllUsers(): Promise<TSelectUser[]> {
		const result = await (this.base_repository.orm as TDrizzleOrm)
			.query.table_users.findMany()

		return this.base_repository.logger.logAndReturn(
			result,
			'operation: get_all'
		);
	}

	async getUser(userID: string): Promise<TSelectUser | undefined> {
		if (!userID) {
			throw new RepositoryError(
				'USER_ID not provided',
				'get_one'
			)
		}

		const result = await (this.base_repository.orm as TDrizzleOrm)
			.query
			.table_users
			.findFirst(
				{
					where(columns) {
						return eq(
							columns.user_id,
							userID
						)
					}
				})

		return this.base_repository.logger.logAndReturn(
			result,
			'operation: get_one'
		)
	}

	async updateUser(
		userID: string, updates: TUpdateUser
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

		const result = await (this.base_repository.orm as TDrizzleOrm)
			.update(table_users)
			.set(updates)
			.where(eq(table_users.user_id, userID))
			.returning()

		return this.base_repository.logger.logAndReturn(
			result[0],
			'operation: update_one'
		)
	}

}