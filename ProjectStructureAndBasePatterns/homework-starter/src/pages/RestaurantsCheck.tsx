
import { Card } from "../ui/Card/Card";
import { Restaurant } from "./types";

type TProps = {
    restaurants: Restaurant[];
    onChooseRest: (restaurantId: Restaurant['id'],restaurantRaiting: Restaurant['raiting']) => void;
}

export const RestaurantsCheck = ({ restaurants,onChooseRest}: TProps) => {

    return (restaurants || []).map(item => (
            <Card key={item.id}
                id={item.id}
                url={item.url}
                name={item.name}
                description={item.description}
                raiting={item.raiting}
                onChooseRestaurant={onChooseRest}
            />
        ))
}