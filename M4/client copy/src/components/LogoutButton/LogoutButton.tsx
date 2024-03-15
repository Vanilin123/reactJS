
import { useMutation } from "@tanstack/react-query";
import { Button } from "../Button";
import "./LogoutButton.css";
import { logout } from "../../Api/user";
import { queryClient } from "../../Api/queryClient";

export const LogoutButton = () => {
        const logoutMutation = useMutation({
          mutationFn: () => logout(),
          onSuccess(){
            queryClient.invalidateQueries()
          },
          retry: 0
        },queryClient)
        return (
          <div className="logout-button">
            <Button kind="secondary" onClick={() => logoutMutation.mutate()}>Выйти</Button>
          </div>
        );
      
};
