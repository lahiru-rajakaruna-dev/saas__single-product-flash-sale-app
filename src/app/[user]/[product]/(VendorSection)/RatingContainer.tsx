import Rating from '@/components/ui/rating';
import {
    Star,
    StarOff
}             from 'lucide-react';



export default function RatingContainer() {
    return <div className={ '' }>
        <Rating
            value={ 5 }
            max={ 5 }
            emptySymbol={ <span><StarOff/></span> }
            fullSymbol={ <span><Star/></span> }
        />
    </div>
}

