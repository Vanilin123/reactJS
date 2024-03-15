import { useQuery } from "@tanstack/react-query"
import { fetchMe } from "../../Api/notes"
import { queryClient } from "../../Api/queryClient"
import { Loader } from "../Loader"
import { AuthForm } from "../AuthForm"
import { UserView } from "../UserView"
import { LogoutButton } from "../LogoutButton"
import { Layout } from "../Layout"
import { NoteForm } from "../NoteForm"
import { FetchNoteListView } from "../NotesListView/FetchNoteListView"
import './Account.css'




export const Account = () =>{
    const meQuery = useQuery({

        queryFn: () => fetchMe(),
      
        queryKey: ["users", 'me'],
      
        retry: 0
      
       }, queryClient)
       switch (meQuery.status) {

        case 'pending':
      
         return <Loader />;
      
        case 'error':
      
         return <AuthForm />;
      
        case 'success':
      
         return <div >
         <UserView user={meQuery.data}/>
         <LogoutButton/>
         <Layout children={<div className="notesFlex"><NoteForm/><FetchNoteListView/></div>}/>
     </div>
       }
}