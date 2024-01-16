import React from "react";
import Back from "../common/back/Back";
import CoursesCard from "./CoursesCard";
import OnlineCourses from "./OnlineCourses";
import { price } from "../../dummydata";
import { useParams } from "react-router-dom";
import logo from "../../images/logo-bannr.jpeg";

const Pacote = () => {
  const { pacote } = useParams();
  const pac = price.filter((p) => p.id == pacote);
  const pacEscolhido = pac[0];

  return (
    <>
      <Back title={pacEscolhido.name} />

      <div className="container pacote my-5 py-5">
        <h1 className="text-primary2">{pacEscolhido.name}</h1>
        <p className="text-secondary">{pacEscolhido.desc}</p>
        <h3 className="preco">
          <span className="text-secondary f-14">R$ </span>
          {pacEscolhido.price} / mês
        </h3>
        {pacEscolhido === 1 && (
          <div className="row">
            <div className="col-12 col-md-8">
              {/* Acesso Total à Plataforma */}
              <div className="my-4">
                <h4>Acesso Total à Plataforma:</h4>
                <ul>
                  <li>
                    Materiais interativos, exercícios e quizzes para reforçar o
                    aprendizado.
                  </li>
                  <li>
                    Conteúdo atualizado regularmente para manter-se alinhado com
                    as tendências linguísticas.
                  </li>
                </ul>
              </div>

              {/* Aulas em Grupo Semanais */}
              <div className="my-4">
                <h4>Aulas em Grupo Semanais:</h4>
                <ul>
                  <li>
                    Participação em duas aulas em grupo por semana,
                    proporcionando interação com outros estudantes.
                  </li>
                  <li>
                    Instrutores qualificados para guiar as sessões e esclarecer
                    dúvidas.
                  </li>
                  <li>
                    Entrada exclusiva no fórum online para troca de
                    experiências, dicas e perguntas.
                  </li>
                  <li>
                    Ambiente colaborativo para aprimorar habilidades de escrita
                    e comunicação.
                  </li>
                  <li>
                    Acesso a materiais didáticos exclusivos, incluindo e-books e
                    recursos multimídia.
                  </li>
                  <li>
                    Material atualizado para acompanhar as tendências
                    linguísticas e culturais.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-4 text-center">
              <div className="w-100">
                <img src={logo} className="w-100 rounded-5" alt="" />
              </div>
              <br />
              <h3>Preparamos o seu futuro para sí</h3>

              <br />
              <button className="btn primary-btn">
                Assinar pacote <i className="fa fa-arrow-right text-white"></i>
              </button>
            </div>
          </div>
        )}
        {/* Outros elementos do seu layout aqui */}
      </div>
    </>
  );
};

export default Pacote;
