import ShowcaseLayout_1
							 from '@/app/[user]/[product]/(FeatureShowcaseSection)/_ShowcaseLayout_1';
import { PropsWithChildren } from 'react';



export default function ShowcaseSection(props: PropsWithChildren) {
	return <section
		className={ 'w-full h-screen flex flex-col items-stretch' +
					' justify-center' }
	>
		{
			props.children
		}
	</section>
}

ShowcaseSection.Layout_1 = ShowcaseLayout_1
