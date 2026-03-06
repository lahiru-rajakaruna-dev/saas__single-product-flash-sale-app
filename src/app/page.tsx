'use client'
import {Button}   from "@/components/ui/button";
import Text       from "@/components/ui/text";
import {Supabase} from "@/supabase";
import {useState} from "react";
import {FcGoogle} from "react-icons/fc";



export default function Home() {
	const [email, setEmail]       = useState('')
	const [password, setPassword] = useState('')

	async function signUp() {
		const response = await Supabase.getInstance().auth.signInWithOAuth({
																			   provider: 'google',
																			   options : {
																				   redirectTo: 'http://localhost:3000/dashboard',
																			   }
																		   })

		console.log(response)
		if (response.data.url) {
			window.location.replace(response.data.url);
		}
	}

	return (
		<div className={'w-full max-w-7xl mx-auto h-fit min-h-screen'}>
			<main className={'w-full h-full'}>
				<section className={'w-full h-screen mb-8'}>
					<div className={'relative w-full min-h-full px-8 flex flex-col items-stretch justify-center'}>
						<div className={'flex-1 relative h-full min-h-screen flex flex-col items-stretch justify-center'}>
							<h1 className={'mb-8 text-5xl font-bold text-center'}>Quick Sell Your Product Inventory</h1>
							<Text variant={'body'}
								  className={'mb-4 text-center'}>
								Are you a dropshipper? Then you don&apos;t want any permanent online stores.
								Quickly setup your store and sell.
							</Text>
							<Button onClick={signUp}
									className={'h-fit'}>
								<div className={'py-1 flex flex-row items-center justify-center gap-2'}>
									<div><FcGoogle className={'size-6'}/></div>
									<div>SignIn With Google</div>
								</div>
							</Button>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}


