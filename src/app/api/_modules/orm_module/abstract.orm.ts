import {ILoggerService} from "@/app/api/_modules/logger_module/logger.interface";
import {IOrmService}    from "@/app/api/_modules/orm_module/orm.interface";
import {
	TInsertPage,
	TInsertProduct,
	TInsertUser,
	TSelectPage,
	TSelectProduct,
	TSelectUser,
	TUpdatePage,
	TUpdateProduct,
	TUpdateUser
}                       from "@drizzle/schema";



export abstract class BaseOrmService implements IOrmService {
	protected static instance: IOrmService
	protected readonly logger: ILoggerService

	protected constructor(logger: ILoggerService) {
		this.logger = logger
	}

	abstract createPage(
		userID: string,
		page: TInsertPage
	): Promise<TSelectPage>

	abstract createProduct(
		userID: string,
		product: TInsertProduct
	): Promise<TSelectProduct>

	abstract createUser(user: TInsertUser): Promise<TSelectUser>

	abstract deletePageById(
		userID: string,
		id: string
	): Promise<boolean>

	abstract deleteProductById(
		userID: string,
		id: string
	): Promise<boolean>

	abstract deleteUserById(id: string): Promise<boolean>

	abstract getPageById(
		userID: string,
		id: string
	): Promise<TSelectPage | undefined>

	abstract getPagesByUserId(userId: string): Promise<TSelectPage[]>

	abstract getProductById(
		userID: string,
		id: string
	): Promise<TSelectProduct | undefined>

	abstract getProductsByUserId(userId: string): Promise<TSelectProduct[]>

	abstract getUserById(id: string): Promise<TSelectUser | undefined>

	abstract getUsers(): Promise<TSelectUser[]>

	abstract updatePageById(
		userID: string,
		id: string,
		pageUpdates: TUpdatePage
	): Promise<TSelectPage>

	abstract updateProductById(
		userID: string,
		id: string,
		productUpdates: TUpdateProduct
	): Promise<TSelectProduct>

	abstract updateUserById(
		id: string,
		userUpdates: TUpdateUser
	): Promise<TSelectUser>

}