import { Context_VendorSection } from '@/app/[user]/[product]/(VendorSection)/context';
import Text                      from '@/components/ui/text';
import { useContext }            from 'react';



export default function PriceTag() {
    const { price } = useContext(Context_VendorSection)
    return <div className={ 'flex flex-row items-center justify-start' }>
        <Text variant={ 'body' }>
            <span className={ 'flex flex-row items-center' }>
                <span>LKR: </span>
                <span
                    className={ 'flex flex-row items-center justify-start' +
                                ' gap-2' }
                >
                    {
                        price.min
                        ?
                        <>
                            <span>{ price.min }</span>
                            <span>-</span>
                        </>
                        :
                        <></>
                    }
                    <span>{ price.max }</span>
                </span>
            </span>
        </Text>
    </div>
}


