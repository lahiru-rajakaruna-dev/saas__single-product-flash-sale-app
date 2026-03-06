'use client';
import {Button}            from "@/components/ui/button";
import Image               from "next/image";
import {useRouter}         from "next/navigation";
import {PropsWithChildren} from "react";
import {AiFillDashboard}   from "react-icons/ai";
import {BiFirstPage}       from "react-icons/bi";
import {BsGearFill}        from "react-icons/bs";
import {FaGears}           from "react-icons/fa6";
import {GiCargoCrate}      from "react-icons/gi";
import {LiaPagelines}      from "react-icons/lia";



export default function Dashboard() {
	return <div className={'relative w-full h-screen bg-[hsl(220,95%,13%)]'}>
		<Menu/>
		<ScreenContainer>
			<ProductManager/>
		</ScreenContainer>
	</div>
}

function Menu() {
	return <div className={'fixed z-[1000] left-0 right-0 bottom-0 h-16 shadow-[0px_-4px_6px_0px_hsl(220,95%,10%)] overflow-y-visible rounded-t-md'}>
		<div className={'w-full h-full overflow-y-hidden overflow-x-auto rounded-t-md'}>
			<div className={'w-fit min-w-full h-full flex flex-row items-stretch justify-start gap-1 [&>button]:flex-1 [&>button]:h-full bg-blue-950'}>
				{
					[
						{icon: AiFillDashboard},
						{icon: GiCargoCrate},
						{icon: BiFirstPage},
						{icon: FaGears}
					].map((button) => {
						return <Button key={Math.random()}
									   className={'bg-transparent text-white'}>
							{
								<button.icon className={'size-8'}/>
							}
						</Button>
					})
				}
			</div>
		</div>
	</div>;
}

function ScreenContainer(props: PropsWithChildren) {
	return <div className={'fixed top-0 left-0 right-0 bottom-16'}>
		{
			props.children
		}
	</div>
}

function ProductManager() {
	return <div className={'w-full h-full bg-linear-150 from-[hsl(220,95%,15%)] via-[hsl(220,95%,14%)] to-[hsl(220,95%,13%)]'}>
		<div className={'w-full h-full overflow-x-hidden overflow-y-auto'}>
			<div className={'w-full h-fit min-h-full px-4 pt-4 grid grid-cols-1 auto-rows-auto overflow-visible'}>
				{
					Array(20).fill(0).map(() => {
						const id = `product-${Math.abs(Math.floor(Math.random() * 1_000_000))}`
						return <ProductTile key={"key " + id}
											id={id}/>
					})
				}
			</div>
		</div>
	</div>
}

function ProductTile(props: { [key: string]: string | number }) {
	const router = useRouter()

	return <div className={"w-full h-24 p-2"}
				onClick={async (e) => await router.push(`/product/${props.id}`)}
	>
		<div className={'w-full h-full flex flex-row items-stretch justify-start bg-[hsl(220,95%,20%)] rounded-md overflow-hidden shadow-[4px_4px_6px_0px_hsl(220,95%,8%)]'}>
			<Image src={'https://picsum.photos/96/96'}
				   alt={'random product'}
				   width={96}
				   height={96}
				   loading={'eager'}
			/>
			<div className={'relative w-full h-full p-2 flex flex-col items-stretch justify-between text-[hsl(220,95%,85%)]'}>
				<p className={'font-semibold'}>Cranking Vegitable Slicer</p>
				<p className={"text-sm"}>Rs: <span>1,280</span></p>
				<div className={'absolute bottom-2 right-2 w-fit h-fit px-2 py-0.5 flex flex-row items-center justify-start gap-2 rounded-full border border-green-800'}>
					<div className={'w-2 h-2 rounded-full bg-radial from-green-400 to-green-600 shadow-[0px_0px_6px_1px_hsl(130,95%,50%)]'}/>
					<p className={'text-xs font-bold text-green-800'}>Page</p>
				</div>
			</div>
		</div>
	</div>
}