import {z} from "zod";


export const UserShema = z.object({
id:z.string(),
username:z.string(),
email:z.string(),
})

export type User = z.infer<typeof UserShema>

export function fetchUser(id:string):Promise<User>{
    return fetch(`/api/users/${id}`).then(response => response.json()).then((data) => UserShema.parse(data));
}

export function registerUser (username: string, email:string, password:string):Promise<void>{
    return fetch("/api/register", {
        method:"POST",
        headers:{
    "Content-Type":"application/json",
        },
        body:JSON.stringify({username,email,password})
    }).then(()=>undefined);
}

export async function validateResponse(response:Response):Promise<Response>{
    if(!response.ok){
        throw new Error(await response.text())
    }
    return response;
}

export function loginUser(email:string,password:string):Promise<void>{
    return fetch("/api/login",{
    method: "POST",
    headers:{
        "Content-Type":"application/json",
        },
        body:JSON.stringify({email,password})
}).then(validateResponse)
.then(()=>undefined);
}

export function logout():Promise<void>{
    return fetch("/api/logout", {
        method:"POST",
        headers:{
    "Content-Type":"application/json",
        },
        body:JSON.stringify({})
    }).then(()=>undefined);
    
}