import {IAuthService}   from "@/app/api/_modules/auth_module/auth.interface";
import {ILoggerService} from "@/app/api/_modules/logger_module/logger.interface";
import {
	BaseMiddleware,
	MiddlewareError
}                       from "@/app/api/_modules/middleware_module/base.middleware";
import {
	NextRequest,
	NextResponse
}                       from "next/server";



export class AuthMiddleware extends BaseMiddleware {
	private readonly auth_service: IAuthService;

	constructor(
		authService: IAuthService,
		logger: ILoggerService
	) {
		super(logger)
		this.auth_service = authService
	}

	async process(
		request: NextRequest,
		next: (request: NextRequest) => Promise<NextResponse>
	): Promise<NextResponse> {
		try {

			if (!this.auth_service.canProceed(request)) {
				throw new MiddlewareError(
					'Unauthorized',
					'auth',
					request.cookies
				)
			}
			return await next(request)
		} catch (e) {

			if (e instanceof MiddlewareError) {
				return new NextResponse(JSON.stringify({message: 'Unauthorized'}))
			}

			return new NextResponse(
				JSON.stringify({message: 'Unknown Error'}),
				{status: 400}
			)
		}
	}
}