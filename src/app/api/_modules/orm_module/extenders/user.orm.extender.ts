import {BaseOrmService} from "@/app/api/_modules/orm_module/abstract.orm";
import {OrmError} from "@/app/api/_modules/orm_module/drizzle.orm";
import {IOrmUserManagable} from "@/app/api/_modules/orm_module/orm.interface";
import {
	table_users,
	TInsertUser,
	TSelectUser,
	TUpdateUser
} from "@drizzle/schema";
import {eq} from "drizzle-orm";



export class UserExtendedOrm implements IOrmUserManagable {
	private readonly orm: BaseOrmService

	public constructor(orm: BaseOrmService) {
		this.orm = orm
	}

	async createUser(data: TInsertUser): Promise<TSelectUser> {
		try {
			const result = await this.orm.driver.insert(table_users)
									 .values(data)
									 .returning()

			return this.orm.logger.logAndReturn(
				result[0],
				'operation: create_user'
			);
		} catch (e) {
			throw new OrmError(
				(e as Error).message,
				'create_user',
				{data: data}
			)
		}
	}

	async getUser(userID: string): Promise<TSelectUser | undefined> {
		try {
			const result = await this.orm
									 .driver
									 .query
									 .table_users
									 .findFirst({
													where(columns) {
														return eq(
															columns.user_id,
															userID
														)
													}
												})

			return this.orm.logger.logAndReturn(
				result,
				'operation: get_user_by_id'
			)
		} catch (e) {
			throw new OrmError(
				(e as Error).message,
				'get_user_by_id',
				{id: userID}
			)
		}
	}

	async getUsers(): Promise<TSelectUser[]> {
		try {
			const result = await this.orm.driver.query.table_users
									 .findMany()

			return this.orm.logger.logAndReturn(result, 'get_users')
		} catch (e) {
			throw new OrmError((e as Error).message, 'get_users')
		}
	}

	async updateUser(
		id: string,
		userUpdates: TUpdateUser
	): Promise<TSelectUser> {
		try {
			const result = await this.orm.driver.update(table_users)
									 .set(userUpdates)
									 .where(eq(table_users.user_id, id))
									 .returning()

			return this.orm.logger.logAndReturn(
				result[0],
				'operation: update_user_by_id'
			)
		} catch (e) {
			throw new OrmError(
				(e as Error).message,
				'update_user_by_id',
				{id: id, updates: userUpdates}
			)
		}
	}

	async deleteUserById(id: string): Promise<boolean> {
		try {
			const result = await this.orm.driver.delete(table_users)
									 .where(eq(table_users.user_id, id))
									 .returning()

			this.orm.logger.log(JSON.stringify(result[0]))

			return true
		} catch (e) {
			throw new OrmError((e as Error).message, 'delete_user', {id: id})
		}
	}
}