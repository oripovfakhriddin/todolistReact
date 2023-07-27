import React from "react";
import style from "./card.module.css";
import { Container } from "../../UI";
import { Hero } from "../hero";
export const Card = ({userName, userSurName, setData, id}) => {
  const [input, setInput]=React.useState(false)
  const deleteItem=()=>{
    setData((pr)=>{
      return pr.filter((item)=>item.id !==id)
    })
  }

  const updateItem =()=>{
    setInput(true)
  }
  
  return <>
    <section>
      <Container>
        <div className={style.card__box}>
          {input ? (<Hero setInput={setInput} setData={setData} id={id} dValue={{userName, userSurName}}/>) : (
             <>
                <h1>{userName}</h1>
                <h2>{userSurName}</h2>
                <button className={style.button__card}  onClick={deleteItem}>Delete</button>
                <button className={style.button__card}  onClick={updateItem} >Update</button>
          </>)}
         
        </div>
      </Container>
    </section>
  </>
}