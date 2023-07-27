import style from "./container.module.css";
export const Container =({children})=>{
  return <>
    <div className={style.container}>
      {children}
    </div>
  </>
}