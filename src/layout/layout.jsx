import style from "./layout.module.css";
import { Header } from "../components/section/header";
import { Footer } from "../components/section/footer";
export const MainLayout =({children})=>{
  return  <>
    <header><Header/></header>
    <main>{children}</main>
    <footer><Footer/></footer>
  </>
 

}