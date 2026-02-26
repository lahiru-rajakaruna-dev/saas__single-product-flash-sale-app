import {AUTH_PROVIDERS, IAuthService} from "@/app/api/_modules/auth_module/auth.interface";
import {SupabaseAuthService}          from "@/app/api/_modules/auth_module/supabase_auth.service";
import * as dotenv                    from 'dotenv'
import path                           from 'node:path';



dotenv.config({
				  debug: true,
				  path : [
					  path.resolve(process.cwd(), '.env.development'),
					  path.resolve(process.cwd(), '.env.production')
				  ],
			  })



export class AuthServiceFactory {
	public static getAuthService(): IAuthService {
		const auth_service_provider = process.env.AUTH_SERVICE_PROVIDER

		switch (auth_service_provider) {
			case 'SUPABASE':
				return SupabaseAuthService.getInstance()
			default:
				throw new Error(`Invalid cache provider: ${auth_service_provider}\nAvailable Options:${AUTH_PROVIDERS.join(
					' | ')}`)
		}
	}
}
