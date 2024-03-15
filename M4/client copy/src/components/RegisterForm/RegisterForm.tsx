import { FormField } from "../FormField";
import { Button } from "../Button";
import { FormEventHandler, useState } from "react";
import { registerUser } from "../../Api/user";
import {useMutation} from "@tanstack/react-query"
import { queryClient } from "../../Api/queryClient";
import "./RegisterForm.css";

export const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [erorEmailForm, setErorEmailForm]= useState<string|undefined>();
  const [erorNameForm, setErorNameForm]= useState<string|undefined>();
  const [erorPasswordForm, setErorPasswordForm]= useState<string|undefined>();

  const registerMutation = useMutation({
    mutationFn: () => registerUser(username,email, password),
    },queryClient)

    const handleSubmit: FormEventHandler<HTMLFormElement> = (event) =>{
      event.preventDefault();
      const mailformat = /[^\s@]+@[^\s@]+\.[^\s@]+/;
      if(username.length>5 && password.length>8 && email.match(mailformat)){
        registerMutation.mutate();
      }if(username.length<5){
        setErorNameForm("Имя должно быть больше 5 символов")
      }if(password.length<8){
        setErorPasswordForm("Пароль должен быть больше 8 символов")
      }if(!email.match(mailformat)){
        setErorEmailForm("email не подходит")
      }
      
    }

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <FormField label="Имя">
        <input 
        type="text" 
        name="username"
        onChange={(event)=> {setUsername(event.target.value);
          setErorNameForm(undefined)}}
        value={username}
        />
        {erorNameForm && <span style={{color:"red"}}>{erorNameForm}</span>}
      </FormField>
      <FormField label="Email">
        <input 
        type="text" 
        name="email"
        onChange={(event)=> {setEmail(event.target.value);
          setErorEmailForm(undefined)}}
        value={email}
        />
        {erorEmailForm && <span style={{color:"red"}}>{erorEmailForm}</span>}
      </FormField>
      <FormField label="Пароль">
        <input type="password" 
        name="password"
        onChange={(event)=> {setPassword(event.target.value);
          setErorPasswordForm(undefined)}}
        value={password} />
      </FormField>
      {erorPasswordForm && <span style={{color:"red"}}>{erorPasswordForm}</span>}
      {registerMutation.error && <span>{registerMutation.error.message}</span>}

      <Button  type="submit" title="Зарегистрироваться" isLoading={registerMutation.isPending}>Зарегистрироваться</Button>
    </form>
  );
};
