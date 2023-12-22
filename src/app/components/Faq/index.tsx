"use client";
import { X } from "@phosphor-icons/react";
import { useState } from "react";
import { BotaoCtaPurple } from "../BotaoCTA";

export const Faq = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
    <div className="flex flex-col gap-5">
      <div className="flex flex-col items-center justify-center bg-[url(/faq.png)] p-5 h-[500px]">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-3xl text-gray-900">Dúvidas</h2>
          <h2 className="font-bold text-3xl text-gray-900">Frequentes</h2>
          <h3 className="font-medium gray-600 text-2xl">Sobre Adoção</h3>
        </div>
      </div>
      <div>
        <div className="flex gap-6 flex-col items-center sm:p-5">
          <FAQSection />
        <strong>Clique no botão para iniciar seu atendimento</strong>
        <BotaoCtaPurple />
        </div>
      </div>
    </div>
    </>
  );
};

const FAQItem = ({ question, answer }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div id="faq" className="p-5 sm:w-2/4 w-3/4 bg-gray-200 shadow-md rounded-md">
        <div>
          <div className="flex p-2 justify-between">
            <strong>{question}</strong>
            <div>
            <X
              className={`${
                !toggle ? "rotate-45" : ""
              } hover:cursor-pointer transition-all duration-300`}
              onClick={handleToggle}
              size={24}
            />
            </div>
          </div>
          <div
            className={`transition-all duration-500 ${
              !toggle ? "opacity-0 hidden" : "opacity-100 block"
            }`}
          >
            <p className="text-gray-700">{answer}</p>
          </div>
        </div>
      </div>
    </>
  );
};

const FAQSection = () => {
  return (
    <>
      <FAQItem
        question="Quem pode adotar?"
        answer="Homens e mulheres, não importa o seu estado civil, desde que sejam maiores de 18 anos de idade, 16 anos mais velhos do que o adotado, com estáveis condições socioeconômicas, e ofereçam um ambiente familiar adequado ao futuro filho."
      />
      <FAQItem
        question="A criança adotada perde o vínculo jurídico com os pais biológicos?"
        answer="Sim, todos os vínculos jurídicos com os pais biológicos e parentes são anulados com a adoção, salvo os impedimentos matrimoniais (para evitar casamentos entre irmãos e entre pais e filhos do mesmo sangue)."
      />
      <FAQItem
        question="A família biológica pode conseguir seu filho de volta depois da adoção?"
        answer="Não, depois de lavrada a sentença da adoção pelo juiz, ela é irreversível, e a família biológica perde todo e qualquer direito sobre a criança/adolescente. "
      />
      <FAQItem
        question="Quais são os custos financeiros para o processo de adoção?"
        answer="A inscrição, a avaliação e o acompanhamento, realizados por instância oficial, são absolutamente gratuitos. Caso os interessados optem por recorrer a serviços externos ao setor público, terão que pagar os honorários cobrados."
      />
      <FAQItem
        question="Quais atos legais formalizam a adoção?"
        answer="Sendo lavrada a sentença, a criança/adolescente passará a ter uma nova certidão de nascimento na qual os adotantes constarão como pais. O processo judicial será arquivado e o registro civil original do adotado será cancelado."
      />
      <FAQItem
        question="Quais são os tipos de adoção?"
        answer="Podem ser classificadas como:
          CONJUNTA: é a hipótese em que o casal se apresenta como postulante à adoção de uma criança ou adolescente com a qual nenhum deles possui qualquer vínculo;
          UNILATERAL: ocorre quando um cônjuge ou companheiro adota o filho do outro;
          PÓSTUMA: ocorre quando a adoção é levada a efeito mesmo o adotante falecendo no curso do procedimento.
          INTUITU PERSONAE: hipótese de adoção em que os pais biológicos influenciam diretamente na escolha da família;
          INTERNACIONAL: é aquela em que os postulantes são domiciliados fora do Brasil, independentemente da nacionalidade brasileira ou estrangeira.
          À BRASILEIRA: trata-se da situação em que uma pessoa registra filho alheio como próprio. Do ponto de vista jurídico, esta não é uma modalidade legítima de adoção. Pelo contrário, é ato tipificado como crime.
          "
      />
    </>
  );
};
