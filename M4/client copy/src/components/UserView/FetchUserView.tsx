import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { fetchUser } from "../../Api/user";
import { queryClient } from "../../Api/queryClient";
import { Loader } from "../Loader";
import { UserView } from ".";
import { AuthForm } from "../AuthForm";

interface FetchUserViewProps{
    userId: string,
}

export const FetchUserView:FC<FetchUserViewProps> = ({userId}) => {
     const userQuery = useQuery({
        queryFn: () => fetchUser(userId),
        queryKey: ["users", userId]
    },queryClient)
    switch(userQuery.status){
        case "error":
            return <AuthForm/>
        case "success":
            return <UserView user={userQuery.data}/>
        case "pending":
            return <Loader/>
    }
}