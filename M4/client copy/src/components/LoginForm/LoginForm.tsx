import "./LoginForm.css";
import { FormField } from "../FormField";
import { Button } from "../Button";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../../Api/user";
import { queryClient } from "../../Api/queryClient";
import { FormEventHandler, useState } from "react";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [erorEmailForm, setErorEmailForm]= useState<string|undefined>();
  const [erorPasswordForm, setErorPasswordForm]= useState<string|undefined>();


  const loginMutation = useMutation({
    mutationFn: () => loginUser(email, password),
    onSuccess(){
      queryClient.invalidateQueries({ queryKey: ["users", "me"] });
    }
    },queryClient)

    const handleSubmit: FormEventHandler<HTMLFormElement> = (event) =>{
      event.preventDefault();
      const mailformat = /[^\s@]+@[^\s@]+\.[^\s@]+/;
      if( password.length>8 && email.match(mailformat)){
        loginMutation.mutate();
      }if(password.length<8){
        setErorPasswordForm("Пароль должен быть больше 8 символов")
      }if(!email.match(mailformat)){
        setErorEmailForm("email не подходит")
      }
      
      
    }

    return (
      <form className="login-form" onSubmit={handleSubmit}>
        <FormField label="Email">
          <input
          type="text" 
          name="email"
          onChange={(event)=>{ setEmail(event.target.value);
            setErorEmailForm(undefined)}}
          value={email}
          />
          {erorEmailForm && <span style={{color:"red"}}>{erorEmailForm}</span>}
        </FormField>
        <FormField label="Пароль">
          <input 
          type="password" 
          name="password"
          onChange={(event)=> {setPassword(event.target.value);
            setErorPasswordForm(undefined)}}
          value={password} />
        </FormField>
        {erorPasswordForm && <span style={{color:"red"}}>{erorPasswordForm}</span>}
  {loginMutation.error && <span>{loginMutation.error.message}</span>}
        <Button type="submit" title="Войти" isLoading={loginMutation.isPending}>Войти</Button>
      </form>
  );
};
