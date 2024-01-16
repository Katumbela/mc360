import React from "react"
import Back from "../common/back/Back"
import CoursesCard from "./CoursesCard"
import OnlineCourses from "./OnlineCourses"
import { price } from "../../dummydata"
import { useParams } from "react-router-dom"

const Pacote = () => {

  const [pacote] = useParams();
  const pac = price.filter((p) => p.id == pacote);
  const pacEscolhido = pac[0];
  console.log(pacEscolhido);

  return (
    <>
      <Back title={pacEscolhido.name} />
      <CoursesCard />
      <OnlineCourses />
    </>
  )
}

export default Pacote
