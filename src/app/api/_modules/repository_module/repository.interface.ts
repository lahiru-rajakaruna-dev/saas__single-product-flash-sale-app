export interface IRepository<TSelect, TUpdate, TInsert> {
	createOne(userID: string, data: TInsert): Promise<TSelect>

	getOne(userID: string, id: string): Promise<TSelect | undefined>

	getAll(userID: string): Promise<TSelect[]>

	updateOne(
		userID: string,
		id: string,
		updates: TUpdate
	): Promise<TSelect | undefined>

	deleteOne(userID: string, id: string): Promise<boolean>
}