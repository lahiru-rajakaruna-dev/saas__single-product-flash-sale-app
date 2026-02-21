import { Context_VendorSection } from '@/app/[user]/[product]/(VendorSection)/context';
import Text                      from '@/components/ui/text';
import { useContext }            from 'react';



export default function ProductName() {
    const { title } = useContext(Context_VendorSection)
    return <div
    >
        <Text variant={ 'h2' }>
            {
                title
            }
        </Text>
    </div>
}

