import React, { useState } from "react";
import { price } from "../../dummydata";

const PriceCard = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const showBenefits = (packageIndex) => {
    setSelectedPackage(packageIndex);
  };

  const hideBenefits = () => {
    setSelectedPackage(null);
  };

  return (
    <>
      {price.map((val, index) => (
        <div
          className="col-12 position-relative col-sm-6 my-3 col-md-4 col-lg-3"
          key={index}
        >
          <div className="items w-100 shadow">
            <h4>{val.name}</h4>
            <h1>
              <span>R$</span>
              {val.price}
            </h1>
            <p>{val.desc}</p>
            <button
              className="btn-sm btn btn-outline-info outline-btn"
              onClick={() => showBenefits(index)}
            >
              VER BENEFÍCIOS
            </button>
            {selectedPackage === index && (
            <div className="benefitss text-start f-12">
              <h3>Benefícios do Pacote</h3>
              <ul>
                {index === 0 && (
                  <>
                    <li>Acesso a 5 aulas gravadas de inglês básico</li>
                    <li>Materiais didáticos complementares</li>
                    <li>Fórum de comunidade online</li>
                    <li>Preço: R$ 23,00 por mês</li>
                  </>
                )}
                {index === 1 && (
                  <>
                    <li>Acesso ilimitado a aulas gravadas de inglês intermediário.</li>
                    <li>2 aulas ao vivo por mês com instrutores nativos em grupo.</li>
                    <li>Material exclusivo para prática diária</li>
                    <li>Fórum exclusivo de networking</li>
                    <li>Preço: R$ 68,00 por mês</li>
                  </>
                )}
                {index === 2 && (
                  <>
                    <li>Acesso a todas as aulas gravadas, de básico a avançado</li>
                    <li>5 aulas ao vivo por mês com instrutores nativos</li>
                    <li>Materiais avançados e exercícios práticos</li>
                    <li>Acesso exclusivo a eventos especiais</li>
                    <li>Preço: R$ 100,00 por mês</li>
                  </>
                )}
                {index === 3 && (
                  <>
                    <li>Acesso ilimitado a todas as aulas gravadas e ao vivo</li>
                    <li>10 aulas particulares por ano</li>
                    <li>Acesso prioritário a eventos presenciais (quando disponíveis)</li>
                    <li>Certificado de conclusão premium</li>
                    <li>Preço: R$ 150,00 por mês</li>
                  </>
                )}
                {index === 4 && (
                  <>
                    <li>Acesso corporativo para até 10 funcionários</li>
                    <li>Personalização de conteúdo para necessidades empresariais</li>
                    <li>Sessões de treinamento exclusivas para a equipe</li>
                    <li>Relatórios de progresso e desempenho</li>
                    <li>Preço: A partir de R$ 2000,00 por mês (valor por funcionário)</li>
                  </>
                )}
              </ul>
              <center>
                <button
                  className="btn btn-outline-secondary mx-auto mt-3"
                  onClick={hideBenefits}
                >
                  FECHAR
                </button>
              </center>
            </div>
          )}
          </div>
        </div>
      ))}
    </>
  );
};

export default PriceCard;
