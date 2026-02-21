import {
	Card,
	CardContent
}                            from '@/components/ui/card';
import { Prettify }          from '@/lib/utils';
import {
	cva,
	VariantProps
}                            from 'class-variance-authority';
import Image                 from 'next/image';
import { PropsWithChildren } from 'react';
import { twMerge }           from 'tailwind-merge';



export default function ShowcaseSectionImageGallery(props: PropsWithChildren<{
	className?: string
}>) {
	return <div>
		<div
			className={ twMerge(
				'relative aspect-square w-full',
				props.className
			) }
		>
			{ props.children }
		</div>
	</div>
}

const GallerImagePositions = cva('absolute -translate-x-1/2 -translate-y-1/2' +
								 ' bg-orange-600 rounded-md border-2' +
								 ' border-orange-500', {
									 variants: {
										 top : {
											 1 : 'top-1/12',
											 2 : 'top-2/12',
											 3 : 'top-3/12',
											 4 : 'top-4/12',
											 5 : 'top-5/12',
											 6 : 'top-6/12',
											 7 : 'top-7/12',
											 8 : 'top-8/12',
											 9 : 'top-9/12',
											 10: 'top-10/12',
											 11: 'top-11/12',
											 12: 'top-12/12',
										 },
										 left: {
											 1 : 'left-1/12',
											 2 : 'left-2/12',
											 3 : 'left-3/12',
											 4 : 'left-4/12',
											 5 : 'left-5/12',
											 6 : 'left-6/12',
											 7 : 'left-7/12',
											 8 : 'left-8/12',
											 9 : 'left-9/12',
											 10: 'left-10/12',
											 11: 'left-11/12',
											 12: 'left-12/12',
										 }
									 }
								 })


function GalleryImage(props: {
	src: string,
	alt: string,
	size: { width: number, height: number },
	position: Prettify<VariantProps<typeof GallerImagePositions>>
	className?: string
}) {
	
	return <Card
		style={ { width: props.size.width, height: props.size.height } }
		className={ twMerge(
			GallerImagePositions(props.position),
			props.className
		) }
	>
		<CardContent>
			<Image
				src={ props.src }
				alt={ props.alt }
				width={ props.size.width - 32 }
				height={ props.size.height - 32 }
				className={ 'absolute inset-12 top-1/2 left-1/2' +
							' -translate-x-1/2' +
							' -translate-y-1/2' }
			/>
		</CardContent>
	</Card>
}


ShowcaseSectionImageGallery.Image = GalleryImage