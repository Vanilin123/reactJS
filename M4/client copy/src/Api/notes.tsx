import { z } from "zod";
import { User, UserShema, validateResponse } from "./user";

const NoteShema = z.object({
    id:z.string(),
    title:z.string(),
    text:z.string(),
    userId:z.string(),
    createdAt:z.number()
})
    
export type Note = z.infer<typeof NoteShema>
    
export const NoteList = z.array(NoteShema);
    
export type NoteList = z.infer<typeof NoteList>

export const FetchNoteSchema = z.object({list: NoteList,})

type FetchNoteListResponse = z.infer<typeof FetchNoteSchema>

interface FetchParams{
    page:number;
    pageSize: number;
    searchString?: string;
}

export function fetchNoteList(params: FetchParams):Promise<FetchNoteListResponse>{
    const {page, pageSize, searchString} = params;
    let url = `/api/notes?page=${page}&pageSize=${pageSize}`
    if(searchString) {
        url += `&searchString=${searchString}`
    }
    return fetch(url).then(response => response.json()).then((data) => FetchNoteSchema.parse(data));
}

export function createNote(title:string, text:string):Promise<void>{
    return fetch("/api/notes",{
    method: "POST",
    headers:{
        "Content-Type":"appLication/json",
        },
        body:JSON.stringify({title,text})
}).then(validateResponse)
.then(()=>undefined);
}

export function fetchMe(): Promise<User>{
    return fetch("/api/users/me").then(validateResponse).then(response => response.json()).then(data =>UserShema.parse(data))
}

