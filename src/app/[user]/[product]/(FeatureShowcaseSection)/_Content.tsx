import Text from '@/components/ui/text';
import { PropsWithChildren } from 'react';



export default function ShowcaseSectionContent(props: PropsWithChildren<{
	heading: string
}>) {
	return <div>
		<div className={ 'pl-8' }>
			<Text variant={ 'h2' }>{ props.heading }</Text>
			{ props.children }
		</div>
	</div>
}


function BulletPoint(props: { heading: string, description: string }) {
	return (
		<div>
			<Text variant={ 'h3' }>{ props.heading }</Text>
			<Text>{ props.description }</Text>
		</div>
	)
}


ShowcaseSectionContent.Bulletpoint = BulletPoint


