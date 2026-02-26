import {NextApiRequest} from "next";
import {NextResponse}   from "next/server";



export interface IAuthService {

	authorizeRequest(request: Request): boolean
}



export const AUTH_PROVIDERS = ['SUPABASE'] as const