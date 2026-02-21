import Chip                  from '@/app/[user]/[product]/(HeaderSection)/_Chip';
import { Button }            from '@/components/ui/button';
import Text                  from '@/components/ui/text';
import Image                 from 'next/image';
import { PropsWithChildren } from 'react';



export default function HeroLayout_1() {
    return (
        
        <section
            className={ 'w-full h-screen flex flex-col items-stretch' +
                        ' justify-center' }
        >
            <SectionContainer>
                <div>
                    <div
                        className={ 'relative flex flex-col items-start' +
                                    ' justify-start gap-8' }
                    >
                        <Text variant={ 'h1' }>
                            The Powerhouse to Show Your Inner
                            Self
                        </Text>
                        <Text variant={ 'body' }>
                            A beast that can rip the road. Its
                            growling is enough
                            to
                            scare the rest.
                        </Text>
                        <ChipGroup/>
                        <div
                            className={ 'flex flex-row items-center' +
                                        ' justify-start gap-4' }
                        >
                            <Button variant={ 'default' }>Primary
                                                          Action</Button>
                            <Button variant={ 'link' }>Secondary Action</Button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={ 'z-0 relative w-full h-full' +
                                    ' overflow-visible' }
                    >
                        <div
                            style={ {
                                backgroundImage: `url('/blob.png')`
                            } }
                            className={ 'absolute inset-0 z-[-1] bg-center' }
                        />
                        <Image
                            src={ '/car.webp' }
                            alt={ 'hero image of the product' }
                            width={ 500 }
                            height={ 650 }
                            className={ 'z-20' }
                        />
                    </div>
                </div>
            </SectionContainer>
        </section>
    )
}


function SectionContainer(props: PropsWithChildren) {
    return <div
        className={ 'relative py-8 flex flex-row items-stretch' +
                    ' justify-start' +
                    ' [&>div]:flex-1 [&>div]:h-full' }
    >
        {
            props.children
        }
    </div>
}


function ChipGroup() {
    return (
        <div
            className={ 'flex flex-row items-center' +
                        ' justify-start gap-4' }
        >
            <Chip/>
            <Chip/>
            <Chip/>
        </div>
    )
}