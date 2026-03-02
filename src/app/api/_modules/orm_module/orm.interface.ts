import {TDrizzleOrm} from "@/app/api/_modules/orm_module/drizzle.orm";
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
}                    from "@drizzle/schema";



export interface IOrmService {
}



export interface IOrmUserManagable extends IOrmService {
	createUser(data: TInsertUser): Promise<TSelectUser>

	updateUser(
		userID: string,
		updates: TUpdateUser
	): Promise<TSelectUser>

	getUser(userID: string): Promise<TSelectUser | undefined>

	getUsers(adminID: string): Promise<TSelectUser[]>
}



export interface IOrmProductManagable extends IOrmService {

	createProduct(data: TInsertProduct): Promise<TSelectProduct>

	updateProduct(
		userID: string,
		productID: string,
		updates: TUpdateProduct
	): Promise<TSelectProduct>

	getProduct(
		userID: string,
		productID: string
	): Promise<TSelectProduct | undefined>

	getProducts(userID: string): Promise<TSelectProduct[]>

	deleteProduct(userID: string, productID: string): Promise<boolean>
}



export interface IOrmPageManagable extends IOrmService {
	createPage(data: TInsertPage): Promise<TInsertPage>

	updatePage(
		userID: string,
		pageID: string,
		updates: TUpdatePage
	): Promise<TSelectPage>

	getPage(userID: string, pageID: string): Promise<TSelectPage | undefined>

	getPages(userID: string): Promise<TSelectPage[]>

	deletePage(userID: string, pageID: string): Promise<boolean>
}



export const ORM_PROVIDERS = ['DRIZZLE'] as const
export type TOrmTypes = TDrizzleOrm