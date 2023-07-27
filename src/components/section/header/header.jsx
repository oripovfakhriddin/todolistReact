import style from "./header.module.css";
import { Container } from "../../UI";
export const Header = () => {
  return <>
    <section id={style.header}>
      <Container>
        <h1>header</h1>
      </Container>
    </section>
  </>
}