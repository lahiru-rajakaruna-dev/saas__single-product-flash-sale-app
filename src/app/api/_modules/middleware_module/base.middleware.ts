import {ILoggerService} from "@/app/api/_modules/logger_module/logger.interface";
import {IMiddleware}    from "@/app/api/_modules/middleware_module/middleware.interface";
import {
	NextRequest,
	NextResponse
}                       from "next/server";



export class BaseMiddleware implements IMiddleware {
	protected readonly logger: ILoggerService;

	protected constructor(logger: ILoggerService) {
		this.logger = logger
	}

	async process(
		request: NextRequest,
		next: (request: NextRequest) => Promise<NextResponse>
	): Promise<NextResponse> {
		return await next(request)
	}

}



export class MiddlewareError extends Error {
	private readonly context: Record<string, any> = {}
	private readonly middleware: string;

	constructor(
		message: string,
		middleware: string,
		context: Record<string, any> = {}
	) {
		super(message)
		this.middleware = middleware
		this.context    = context
	}

	toString() {
		return JSON.stringify({
								  message   : this.message,
								  middleware: this.middleware,
								  context   : this.context
							  })
	}

}