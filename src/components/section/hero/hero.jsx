import style from "./hero.module.css";
import { Container } from "../../UI";
import React from "react";

export const Hero =({setData, dValue, id, setInput})=>{
  const [inputValue, setinputValue]=React.useState(dValue ? dValue : {userName:"", userSurName: ""});
  const submit =(e)=>{
    e.preventDefault();
    if (!id) {
      setData((pr)=>([...pr,{...inputValue, id:  Date.now()}]));
      setinputValue({userName:"", userSurName: ""});
      return;
    }
    setData((pr)=>{
      return pr.map((item)=>item.id===id ? {...inputValue, id} : item)
    })
    setInput(false)
  }
  const changes = (e)=>{
    setinputValue((pr)=>({...pr, [e.target.name]:e.target.value}))
  }
  
  return <>
  <section>
     <Container>
      <form className={style.form} onSubmit={submit}>
        <input onChange={changes} className={style.inputs} type="text" value={inputValue.userName} placeholder="Name" name="userName" />
        <input onChange={changes} className={style.inputs} type="text" value={inputValue.userSurName} placeholder="Username" name="userSurName" />
        <button type="submit" className={style.btn__send}>{id ? "Update": "Send"}</button>
      </form>

    </Container>
  </section>
   
    </>
}