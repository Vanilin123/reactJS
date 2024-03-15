import { QueryClient, useQuery } from "@tanstack/react-query";
import { getRestaurants } from "../api/api";
import { Restaurant } from "../pages/types";

export const queryClient = new QueryClient()


type Response = {
    data: Restaurant[];
    isError: boolean;
    isLoading: boolean;
  }
  
  export const useRestaurantsList = (): Response => {
    const { data, isError, isLoading } = useQuery({
      queryKey: ['Restaurants'],
      queryFn: getRestaurants,
    },queryClient);
  
    return { data, isError, isLoading };
  }