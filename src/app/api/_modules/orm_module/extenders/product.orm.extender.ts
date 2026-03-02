import {BaseOrmService}       from "@/app/api/_modules/orm_module/abstract.orm";
import {
	OrmError,
	TDrizzleOrm
}                             from "@/app/api/_modules/orm_module/drizzle.orm";
import {IOrmProductManagable} from "@/app/api/_modules/orm_module/orm.interface";
import {
	table_products,
	TInsertProduct,
	TSelectProduct,
	TUpdatePage
}                             from "@drizzle/schema";
import {eq}                   from "drizzle-orm";
import {and}                  from "drizzle-orm/sql/expressions/conditions";



export class ProductExtendedOrm implements IOrmProductManagable {
	private readonly orm: BaseOrmService

	constructor(baseOrm: BaseOrmService) {
		this.orm = baseOrm
	}

	async createProduct(
		product: TInsertProduct
	): Promise<TSelectProduct> {
		try {
			const result = await this.orm.driver.insert(table_products)
									 .values(
										 product
									 )
									 .returning()

			return this.orm.logger.logAndReturn(
				result[0],
				'operation: create_product'
			);
		} catch (e) {
			throw new OrmError(
				(e as Error).message,
				'create_page',
				{data: product}
			)
		}
	}

	async deleteProduct(
		userID: string,
		id: string
	): Promise<boolean> {
		try {
			const result = await this.orm.driver.delete(table_products)
									 .where(
										 and(
											 eq(
												 table_products.product_id,
												 id
											 ),
											 eq(
												 table_products.product_owner_id,
												 userID
											 )
										 ))
									 .returning()
			this.orm.logger.log(JSON.stringify(result[0]))
			return true
		} catch (e) {
			throw new OrmError(
				(e as Error).message,
				'delete_product',
				{id: id}
			)
		}
	}

	async getProduct(
		userID: string,
		id: string
	): Promise<TSelectProduct | undefined> {
		try {
			const result = await this.orm.driver.query.table_products.findFirst(
				{
					where(columns) {
						return and(
							eq(
								columns.product_owner_id,
								userID
							),
							eq(
								columns.product_id,
								id
							)
						)
					}
				})

			return this.orm.logger.logAndReturn(
				result,
				'operation: get_product_by_id'
			)
		} catch (e) {
			throw new OrmError(
				(e as Error).message,
				'get_product_by_id',
				{product_id: id}
			)
		}
	}

	async getProducts(userId: string): Promise<TSelectProduct[]> {
		try {
			const result = await this.orm.driver.query.table_products.findMany(
				{
					where(columns) {
						return eq(
							columns.product_owner_id,
							userId
						)
					}
				})

			return this.orm.logger.logAndReturn(
				result,
				'operation: get_products_by_user_id'
			)
		} catch (e) {
			throw new OrmError(
				(e as Error).message,
				'get_products',
				{user_id: userId}
			)
		}
	}

	async updateProduct(
		userID: string,
		id: string,
		productUpdates: TUpdatePage
	): Promise<TSelectProduct> {
		try {
			const result = await this.orm.driver.update(table_products)
									 .set(productUpdates)
									 .where(
										 and(
											 eq(
												 table_products.product_id,
												 id
											 ),
											 eq(
												 table_products.product_owner_id,
												 userID
											 )
										 ))
									 .returning()

			return this.orm.logger.logAndReturn(
				result[0],
				'operation: update_product_by_id'
			)
		} catch (e) {
			throw new OrmError(
				(e as Error).message,
				'update_product_by_id',
				{id: id, updates: productUpdates}
			)
		}
	}
}