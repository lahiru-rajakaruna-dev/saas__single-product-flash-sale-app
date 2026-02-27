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
} from "@drizzle/schema";



export interface IOrmService {
	getUserById(id: string): Promise<TSelectUser | undefined>

	getUsers(): Promise<TSelectUser[]>

	createUser(user: TInsertUser): Promise<TSelectUser>

	updateUserById(
		id: string,
		userUpdates: TUpdateUser
	): Promise<TSelectUser>

	deleteUserById(id: string): Promise<boolean>

	getProductById(
		userID: string,
		id: string
	): Promise<TSelectProduct | undefined>

	getProductsByUserId(userId: string): Promise<TSelectProduct[]>

	createProduct(
		userID: string,
		product: TInsertProduct
	): Promise<TSelectProduct>

	updateProductById(
		userID: string,
		id: string,
		productUpdates: TUpdateProduct
	): Promise<TSelectProduct>

	deleteProductById(
		userID: string,
		id: string
	): Promise<boolean>

	getPageById(
		userID: string,
		id: string
	): Promise<TSelectPage | undefined>

	getPagesByUserId(userId: string): Promise<TSelectPage[]>

	createPage(
		userID: string,
		page: TInsertPage
	): Promise<TSelectPage>

	updatePageById(
		userID: string,
		id: string,
		pageUpdates: TUpdatePage
	): Promise<TSelectPage>

	deletePageById(
		userID: string,
		id: string
	): Promise<boolean>

}



export const ORM_PROVIDERS = ['DRIZZLE'] as const