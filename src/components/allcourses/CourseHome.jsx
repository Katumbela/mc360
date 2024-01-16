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
        {pacEscolhido.id === 1 && (
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

        {pacEscolhido.id === 2 && (
          <>
            <div className="row">
              <div className="col-12 col-md-8 ">
                {/* Benefícios do Pacote Silver e Aulas Particulares Mensais */}
                <div className="my-4">
                  <h4>Inclui todos os benefícios do Pacote Silver, além de:</h4>
                  <ul>
                    <li>Aulas Particulares Mensais:</li>
                    <ul>
                      <li>
                        Uma aula particular por mês para focar em áreas
                        específicas de melhoria.
                      </li>
                      <li>
                        Feedback personalizado e plano de estudo adaptado às
                        necessidades individuais.
                      </li>
                    </ul>
                    <li>Gravações das Aulas:</li>
                    <ul>
                      <li>
                        Acesso às gravações das aulas para revisão e reforço.
                      </li>
                      <li>
                        Flexibilidade para revisitar conceitos-chave no seu
                        próprio ritmo.
                      </li>
                    </ul>
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
                  Assinar pacote{" "}
                  <i className="fa fa-arrow-right text-white"></i>
                </button>
              </div>
            </div>
          </>
        )}

        {pacEscolhido.id === 3 && (
          <>
            {/* Benefícios do Pacote Gold e Aulas Particulares Semanais */}
            <div className="row">
              <div className="col-12 col-md 8">
                <div className="my-4">
                  <h4>Inclui todos os benefícios do Pacote Gold, além de:</h4>
                  <ul>
                    <li>Aulas Particulares Semanais:</li>
                    <ul>
                      <li>
                        Quatro aulas particulares por mês para uma atenção mais
                        intensiva.
                      </li>
                      <li>
                        Personalização total do plano de estudo de acordo com
                        suas metas.
                      </li>
                    </ul>
                    <li>Feedback Contínuo:</li>
                    <ul>
                      <li>Feedback regular sobre o desempenho e progresso.</li>
                      <li>
                        Sessões de revisão para ajustes e aprimoramentos
                        constantes.
                      </li>
                    </ul>
                    <li>Material Didático Exclusivo Impresso:</li>
                    <ul>
                      <li>
                        Envio mensal de material didático exclusivo impresso em
                        sua casa.
                      </li>
                      <li>
                        Apostilas, livros e recursos físicos para uma
                        experiência de aprendizado tátil.
                      </li>
                    </ul>
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
                  Assinar pacote{" "}
                  <i className="fa fa-arrow-right text-white"></i>
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Pacote;
