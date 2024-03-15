import { useQuery } from "@tanstack/react-query"
import { fetchNoteList } from "../../Api/notes"
import { queryClient } from "../../Api/queryClient"
import { Loader } from "../Loader"
import { AuthForm } from "../AuthForm"
import { NotesListView } from "."
import { useState } from "react"
import { PageSelector } from "../PageSelector"

export const FetchNoteListView = () => {
    const [page, setPage] = useState(0);
   const FetchQueryNotes = useQuery({
    queryFn: () => fetchNoteList({page:page, pageSize:5, searchString:''}),
    queryKey:["note", page]
    },queryClient)

    switch(FetchQueryNotes.status){
    case "pending":
        return <Loader/>
    case "error":
        return <AuthForm/>
    case "success":
        return <div>
            <NotesListView noteList={FetchQueryNotes.data.list}/>
            <PageSelector
            currentPage={page+1}
            canSelectNext={page<9}
            canSelectPrev={page>=1}
            onNextClick={()=>{
                setPage(page => page+1)
            }}
            onPrevClick={()=>{
                setPage(page => page-1)
            }}/>
        </div> 
    }
}