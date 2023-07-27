import React from "react"
import { MainLayout } from "../../layout"
import { Hero } from "../../components/section/hero"
import { Card } from "../../components/section/card"
export const Home = () => {
  const [data, setData]=React.useState([])
  console.log(data);

  return <>
    <MainLayout>
      <Hero setData={setData} />
      {data.map((el)=>{
        return <Card key={el.id} setData={setData} {...el}/>
      })}
      
    </MainLayout>
  </>
}