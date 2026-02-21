import { Context_VendorSection } from '@/app/[user]/[product]/(VendorSection)/context';
import Text                      from '@/components/ui/text';
import { useContext }            from 'react';



export default function ProductDescription() {
    const { description } = useContext(Context_VendorSection)
    return <div
        className={ '' }
    >
        <Text variant={ 'body' }>{ description }</Text>
    </div>
}

