'use client'

import CardsLayout_1         from '@/app/[user]/[product]/(CardSection)/_CardLayout_1';
import { PropsWithChildren } from 'react';



export default function CardSection(props: PropsWithChildren) {
    return <section
        className={ 'w-full h-screen flex flex-col items-stretch' +
                    ' justify-center' }
    >
        {
            props.children
        }
    </section>
}

CardSection.Layout_1 = CardsLayout_1