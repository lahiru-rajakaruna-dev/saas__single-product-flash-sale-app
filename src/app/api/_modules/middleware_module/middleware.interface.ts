import {
	NextRequest,
	NextResponse
} from "next/server";



export interface IMiddleware {
	process(
		request: NextRequest,
		next: (request: NextRequest) => Promise<NextResponse>
	): Promise<NextResponse>
}