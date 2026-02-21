import CheckoutButton
                                 from '@/app/[user]/[product]/(VendorSection)/CheckoutButton';
import { Context_VendorSection } from '@/app/[user]/[product]/(VendorSection)/context';
import FeatureOverview
                                 from '@/app/[user]/[product]/(VendorSection)/FeatureOverView';
import InventoryBar
                                 from '@/app/[user]/[product]/(VendorSection)/InventoryBar';
import PriceTag
                                 from '@/app/[user]/[product]/(VendorSection)/PriceTag';
import ProductDescription
                                 from '@/app/[user]/[product]/(VendorSection)/ProductDescription';
import ProductName
                                 from '@/app/[user]/[product]/(VendorSection)/ProductName';
import RatingContainer
                                 from '@/app/[user]/[product]/(VendorSection)/RatingContainer';
import Timer
                                 from '@/app/[user]/[product]/(VendorSection)/Timer';
import VariantPicker
                                 from '@/app/[user]/[product]/(VendorSection)/VariantPicker';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
}                                from '@/components/ui/accordion';
import {
    Card,
    CardContent
}                                from '@/components/ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
}                                from '@/components/ui/carousel';
import Image                     from 'next/image';
import { useContext }            from 'react';



export default function VendorSection() {
    return (
        <Context_VendorSection.Provider
            value={ {
                id         : 'user-001-product-001',
                title      : 'Ford Mustang Hell Cat',
                description: 'Congue aenean habitant curae et facilisi.',
                images     : Array(8).fill(0).map(() => {
                    return {
                        id : `image-${ Math.floor(Math.random() * 100) }`,
                        url: 'https://picsum.photos/200'
                    }
                }),
                inventory  : {
                    available: 1,
                    total    : 50
                },
                price      : {
                    max: 250,
                    min: 200
                },
                rating     : 4,
                variants   : Array(4).fill(0).map(() => {
                    return () => ({
                        id       : `variant-${ Math.floor(Math.random() * 1000) }`,
                        price    : Math.floor(Math.random() * 250),
                        image_url: 'https://picsum.photos/80'
                    })
                })
            } }
        >
            <section
                className={ 'w-full h-screen flex flex-col items-stretch' +
                            ' justify-center' }
            >
                <div
                    className={ 'w-full h-fit py-8 flex flex-row' +
                                ' items-stretch' + ' justify-start' }
                >
                    <LeftSide/>
                    <RightSide/>
                </div>
            </section>
        </Context_VendorSection.Provider>
    )
}


function LeftSide() {
    const {
              images,
          } = useContext(Context_VendorSection)
    
    return (
        <div className={ 'flex-1 grid grid-cols-4 auto-rows-fr gap-4' }>
            <Carousel
                opts={ {
                    align: 'center',
                    loop : true,
                } }
                className={ 'aspect-[1/1] col-start-1 col-span-4' +
                            ' row-start-1' +
                            ' row-span-4' }
            >
                <CarouselContent className={ 'h-[640px]' }>
                    { images.map((
                                     item,
                                     i
                                 ) => {
                        return <CarouselItem
                            key={ `product-image-${ i }-${ Math.floor(
                                Math.random() * 1000) }` }
                            className={ 'relative aspect-square h-full' +
                                        ' basis-full' }
                        >
                            <div
                                className={ 'absolute inset-0 ' +
                                            'flex flex-col items-center' +
                                            ' justify-center' }
                            >
                                <Image
                                    src={ 'https://picsum.photos/1024' }
                                    alt={ 'random image to dev' }
                                    width={ 600 }
                                    height={ 600 }
                                    className={ 'object-cover object-center' }
                                />
                            </div>
                        </CarouselItem>
                    }) }
                </CarouselContent>
                <CarouselPrevious
                    className={ 'top-1/2 left-0' +
                                ' -translate-x-1/2' +
                                ' -translate-y-1/2' }
                />
                <CarouselNext
                    className={ 'top-1/2 right-0' +
                                ' -translate-x-1/2' +
                                ' -translate-y-1/2' }
                />
            </Carousel>
            
            <div
                className={ 'col-start-1 col-span-4 row-start-5' +
                            ' row-span-1' }
            >
                <Carousel
                    className={
                        'w-full h-full'
                    }
                    opts={ {
                        align: 'start',
                        loop : true
                    } }
                >
                    <CarouselContent
                        className={
                            '-ml-4'
                        }
                    >
                        { Array(8)
                            .fill('IMAGE')
                            .map((
                                     item,
                                     i
                                 ) => {
                                return <CarouselItem
                                    key={ `product-image-thumb-${ i }-${ Math.floor(
                                        Math.random() * 1000) }` }
                                    className={ 'basis-1/6 pl-4' }
                                >
                                    <div
                                        className={ 'aspect-1' }
                                    >
                                        
                                        <Image
                                            src={ 'https://picsum.photos/128' }
                                            alt={ 'random image' }
                                            width={ 80 }
                                            height={ 80 }
                                            className={
                                                'object-center object-cover'
                                            }
                                        />
                                    </div>
                                </CarouselItem>
                            }) }
                    </CarouselContent>
                    <CarouselPrevious/>
                    <CarouselNext/>
                </Carousel>
            </div>
        </div>
    )
}


function RightSide() {
    
    return (
        <div
            className={ 'flex-1' }
        >
            <div
                className={ 'p-4 flex flex-col items-stretch justify-start' +
                            ' gap-4' }
            >
                <div
                    className={ 'flex flex-col items-stretch justify-start' +
                                ' gap-1' }
                >
                    <ProductName/>
                    <div className={ 'w-full h-0.5 bg-teal-200' }/>
                    <ProductDescription/>
                    <RatingContainer/>
                    <PriceTag/>
                </div>
                
                <FeatureOverview/>
                <VariantPicker/>
                <InventoryBar/>
                
                <div
                    className={ 'h-fit flex flex-row items-center' +
                                ' justify-end' +
                                ' gap-4' }
                >
                    <Timer/>
                    <CheckoutButton/>
                </div>
            </div>
        </div>
    )
}

