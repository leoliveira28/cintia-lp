import Image from "next/image";
import {  BotaoCtaPurple } from "../BotaoCTA";

export const Sobre = () => {
  return (
    <div id="sobre" className="">
      <div className="flex w-full items-center bg-main-blue p-5 justify-center">
        <h2 className="font-mediun text-2xl text-center sm:text-3xl text-slate-50">
          Adoção é tomar alguém como filho...
        </h2>
      </div>
      <div className="flex justify-center">
      <div className="flex sm:w-3/4 items-center justify-center sm:flex-row flex-col p-5">
        <div className="flex flex-col gap-5">
        <p className="text-gray-500">
          <strong className="text-xl text-blue-800">
            Adoção é tomar alguém como filho,
          </strong>{" "}
          dar o seu nome, escolher, desejar, dedicar a outrem, cuidar,
          reconhecer legalmente como filho e parte integrante da vida de uma
          família ou de uma casa.  
        </p>
        <p className="text-gray-500">
        O procedimento legal da adoção representa a
          oportunidade do exercício da paternidade/maternidade para pais que não
          puderam ter filhos biológicos ou que optaram por ter filhos sem
          vinculação genética, conferindo para crianças/adolescentes todos os
          direitos e deveres de filho.
        </p>
        <p className="text-gray-500">
        Advogada especializada em processo de
          adoção de crianças e adolescentes. Posso te ajudar a realizar o desejo
          de ter um filho!
        </p>
      <strong>Clique no botão para inciar seu atendimento</strong>
      <BotaoCtaPurple />
        </div>
        <Image src={"/cintia.png"} alt={"Foto da Cintia Advogada"} width={450} height={600}/>
      </div>
      </div>
    </div>
  );
};
