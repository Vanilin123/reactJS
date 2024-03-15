
import { Rating } from 'react-simple-star-rating'
import './Card.css'



type TProps = {
    id: string;
    name: string;
    description: string;
    raiting:number;
    url: string;
    onChooseRestaurant: (restaurantId: string,restaurantRating: number) => void;
};

export const Card = ({ id, name, description, raiting, url,onChooseRestaurant }: TProps) => {
    const handel = (raiting:number) => onChooseRestaurant(id,raiting)
    return (
            <div className='card'>
            <img className='card-img' src={url} />
            <h3>{name}</h3>
            <p>{description}</p>
            <Rating
            initialValue={raiting}
            onClick={handel}
            size={30}/>
        </div>
        
    )
}
