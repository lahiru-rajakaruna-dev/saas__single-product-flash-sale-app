import {
    Card,
    CardContent,
    CardHeader
}                       from '@/components/ui/card';
import Text             from '@/components/ui/text';
import { keyGenerator } from '@/lib/utils';
import Image            from 'next/image';
import {
    JSX,
    PropsWithChildren
}                       from 'react';



export default function CardsLayout_1(props: PropsWithChildren) {
    return (
        <div
            className={ 'w-full h-full flex flex-col items-center' +
                        ' justify-center gap-8' }
        >
            {
                props.children
            }
        </div>
    )
}

CardsLayout_1.Content = function Content(props: {
    heading: string,
    description: string
}) {
    return <div className={ 'flex flex-col items-center justify-start' }>
        <Text variant={ 'h2' }>How a Real Beast Looks, When under the Right
                               Master</Text>
        <Text>Left in the dard too long. Consumed by unyielding power. Its
              back. To Dominate All.</Text>
    </div>
}

CardsLayout_1.CardsGrid = function CardsGrid(props: {
    cardContents: {
        heading: string,
        icon: JSX.Element,
        description: string
    }[]
}) {
    return <div className={ 'grid grid-cols-4 auto-rows-fr gap-4' }>
        {
            props.cardContents.slice(0, 4).map((cardContent, i) => {
                return <Card
                    key={ keyGenerator('card', i.toString()) }
                    className={ 'aspect-[3/3.5] w-full h-auto flex flex-col' +
                                ' items-center justify-center' +
                                ' bg-teal-400' +
                                ' border-teal-300' }
                >
                    <CardContent>
                        <div
                            className={ 'w-full h-full flex flex-col' +
                                        ' items-center' +
                                        ' justify-center gap-2 text-center' }
                        >
                            <div className={ 'aspect-square w-fit' }>
                                { cardContent.icon }
                            </div>
                            <Text variant={ 'h3' }>
                                {
                                    cardContent.heading
                                }
                            </Text>
                            <Text
                                variant={ 'small' }
                                className={ 'line-clamp-4' }
                            >{ cardContent.description }</Text>
                        </div>
                    </CardContent>
                </Card>
            })
        }
    </div>
}
