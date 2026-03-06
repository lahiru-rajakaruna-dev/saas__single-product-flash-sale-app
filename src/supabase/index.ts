import {
	createClient,
	SupabaseClient
}                  from "@supabase/supabase-js";
import * as dotenv from 'dotenv';
import path        from "node:path";



export class Supabase {
	private static instance: SupabaseClient | undefined;

	static getInstance() {
		if (!this.instance) {
			this.instance = createClient(
				process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL!,
				process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
			)
		}

		return this.instance
	}
}