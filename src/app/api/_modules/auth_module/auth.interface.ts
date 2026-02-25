import {NextApiRequest} from "next";
import {NextResponse}   from "next/server";

export interface IAuthService {

    authorizeRequest(request: NextApiRequest): NextResponse
}