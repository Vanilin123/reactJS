import { FormField } from "../FormField";
import { Button } from "../Button";
import "./NoteForm.css";
import { FormEventHandler, useState,} from "react";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../Api/queryClient";
import { createNote } from "../../Api/notes";

export const NoteForm = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const [erorTitleForm, setErorTitleForm]= useState<string|undefined>();
  const [erorTextForm, setErorTextForm]= useState<string|undefined>();

  const notesMutation = useMutation({
    mutationFn: () => createNote(title, text),
    onSuccess(){
      queryClient.invalidateQueries({ queryKey: ["note"] });
    }
    },queryClient)

    const noteSubmit: FormEventHandler<HTMLFormElement> = (event) =>{
      event.preventDefault()
      if(title.length>5 && text.length>10 && text.length<3000){
      notesMutation.mutate();
      }if(title.length<5){
        setErorTitleForm("Заголовок должен быть больше 5 символов")
      }if(text.length<10){
        setErorTextForm("Текст должен быть больше 10 символов")
      }if(text.length>3000){
        setErorTextForm("Текст должен быть меньше 3000 символов")
      }
      
    }
  return (
    <form className="note-form" onSubmit={noteSubmit}>
      <FormField label="Заголовок">
      <input
          type="text" 
          name="title"
          onChange={(event)=> {setTitle(event.target.value);
            setErorTitleForm(undefined)}}
          value={title}
          />
      </FormField>
      {erorTitleForm && <span style={{color:"red"}}>{erorTitleForm}</span>}
      <FormField label="Текст">
        <textarea 
        name="text"
        onChange={(event)=> {setText(event.target.value);
        setErorTextForm(undefined)}}
        value={text}
        />
      </FormField>
      {erorTextForm && <span style={{color:"red"}}>{erorTextForm}</span>}
      
      <Button type="submit" title="Войти" isLoading={notesMutation.isPending}>Сохранить</Button>
    </form>
  );
};
