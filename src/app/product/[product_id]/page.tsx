"use client";
import Image        from "next/image";
import {useParams}  from 'next/navigation'
import {
	useEffect,
	useRef,
	useState
}                   from "react";
import {AiFillEdit} from "react-icons/ai";



export default function ProductPage() {
	const {product_id} = useParams()

	return <main className={'fixed z-10 inset-0'}>
		<div className={'w-full h-fit min-h-full py-4 px-4 flex flex-col items-center justify-start gap-8 overflow-x-hidden'}>
			<Images/>
			{/*Title & Description*/}
			<div className={'w-full h-fit'}>
				<SavableInput id={'product_title'}
							  label={'Product Title'}
							  initialValue={'Product Title'}
							  onSave={console.log}/>
				<SavableTextArea id={'product_description'}
								 onSave={console.log}
								 initialValue={'Nothing is here'}
								 label={'Product Description'}
				/>
			</div>
		</div>
	</main>

}

function SavableTextArea(props: { initialValue: string, id: string, label?: string, onSave: (value: string) => void }) {
	const [value, setValue] = useState(props.initialValue)

	return (
		<div>
			{props.label ? <label htmlFor={props.id}
								  className={'text-gray-500 text-sm'}>{props.label}</label> : <></>}
			<div className={'relative w-full h-fit flex flex-row items-stretch justify-start border-2 border-blue-950/20 rounded-sm overflow-hidden'}>
				<textarea className={'w-full h-fit p-1 outline-none'}
						  cols={30}
						  rows={4}
						  id={props.id}
						  value={value}
						  placeholder={"Product description here"}
						  onChange={(e) => setValue(e.currentTarget.value)}
				/>
				<button className={'absolute bottom-1 right-1 w-fit h-auto px-4 py-1 bg-blue-800 text-white rounded-sm'}
						onClick={() => props.onSave(value)}
				>
					Save
				</button>
			</div>
		</div>
	)
}

function SavableInput(props: { initialValue: string, id: string, label?: string, onSave: (value: string) => void }) {
	const [value, setValue] = useState(props.initialValue);

	return (
		<div>
			{props.label ? <label htmlFor={props.id}>{props.label}</label> : <></>}
			<div className={'w-full h-fit flex flex-row items-stretch justify-start border-2 border-blue-950/20 rounded-sm overflow-hidden'}>
				<div className={'aspect-square h-full w-auto p-2 border-r-2 border-blue-950/10'}>
					<AiFillEdit className={'size-4'}/>
				</div>
				<input className={'w-full h-auto p-1 outline-none'}
					   id={props.id}
					   value={value}
					   placeholder={"Pick a name"}
					   onChange={(e) => setValue(e.currentTarget.value)}
				/>
				<button className={'w-fit h-auto px-4 py-1 bg-blue-800 text-white'}
						onClick={() => props.onSave(value)}
				>
					Save
				</button>
			</div>
		</div>
	)
}

function Images() {

	const [imageWidth, setImageWidth] = useState(375)
	const container                   = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (!container.current) {
			return
		}

		setImageWidth(container.current.getBoundingClientRect().width)
	}, []);

	return <div className={'aspect-[1/1] w-full h-auto overflow-hidden'}
				ref={container}>
		<div className={'w-full h-full overflow-y-hidden overflow-x-auto snap-proximity'}>
			<div className={'w-full h-full flex flex-row items-stretch justify-start [&>div]:flex-1 [&>div]:shrink-0 overflow-x-auto overflow-y-hidden snap-mandatory snap-y scroll-smooth'}>
				{
					Array(8)
						.fill(0)
						.map(() => {
							return <div key={Math.random()}
										style={
											{
												minWidth : `${imageWidth}px`,
												minHeight: `${imageWidth}px`
											}
										}
										className={'snap-start'}
							>
								<Image src={`https://picsum.photos/${imageWidth}`}
									   alt={''}
									   width={imageWidth}
									   height={imageWidth}
								/>
							</div>
						})
				}
			</div>
		</div>
	</div>
}