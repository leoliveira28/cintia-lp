import { BotaoCtaBlue } from "../BotaoCTA";

export const Requisitos = () => {
  return (
    <div id="atuacao">
      <div className="bg-[url(/requisitos.png)] p-5 flex flex-col items-center justify-center h-[600px]">
        <h2 className="text-gray-900 text-4xl">PRINCIPAIS REQUISITOS PARA</h2>
        <h3 className="text-gray-900 text-3xl font-bold">ADOÇÃO</h3>
      </div>
      <div className="flex items-center justify-center bg-gradient-to-t from-[#A525B0]  to-[#19369C] p-5">
        <p className="font-medium text-slate-50 text-2xl sm:w-3/5 w-3/4">
          Você quer se tornar pai ou mãe por adoção? Sabia que existe uma forma
          correta e legal disso acontecer? Vamos discutir o que você precisa
          saber e fazer para constituir uma família adotiva!
        </p>
      </div>
      <div className="flex flex-col p-5 items-center justify-center">
      <div className="flex sm:w-3/4 flex-col gap-5 p-5">
        <p className="text-gray-500">
      <strong className="text-gray-900">1º PASSO:</strong> procure o Fórum ou a Vara da Infância e da Juventude da sua cidade ou região.
        </p>
        <p className="text-gray-500">
      <strong className="text-gray-900">2º PASSO:</strong> os documentos apresentados serão analisados e remetidos ao Ministério Público para aprovação e seguimento do processo.
        </p>
        <p className="text-gray-500">
      <strong className="text-gray-900">3º PASSO:</strong> participação em entrevista psicossocial e visita domiciliar.
        </p>
        <p className="text-gray-500">
      <strong className="text-gray-900">4º PASSO:</strong> participação em programa ou curso de preparação para adoção.
        </p>
        <p className="text-gray-500">
      <strong className="text-gray-900">5º PASSO:</strong> análise do requerimento pela autoridade judiciária e sentença deferindo ou não o pedido de habilitação à adoção.
        </p>
        <p className="text-gray-500">
      <strong className="text-gray-900">6º PASSO:</strong> com o deferimento, haverá a inserção do nome do(s) pretendente(s) no cadastro estadual, e, caso opte, no Cadastro Nacional de Adoção (CNA).
        </p>
        <p className="text-gray-500">
      <strong className="text-gray-900">7º PASSO:</strong> inicia-se aqui a fase de busca de uma família para a criança/adolescente, respeitando-se a ordem de classificação nos cadastros. Será apresentado o histórico de vida da criança/adolescente ao postulante e, se houver interesse, será permitida uma aproximação com a mesma.
        </p>
        <p className="text-gray-500">
      <strong className="text-gray-900">8º PASSO:</strong> se procedente a ação de adoção, o juiz determinará a confecção de novo registro de nascimento, já com o sobrenome da nova família. Nesse momento, a criança/adolescente passa a ter todos os direitos de um filho.
        </p>
      </div>
      <strong>
      Clique no botão para iniciar seu atendimento
      <BotaoCtaBlue />
      </strong>
      </div>
    </div>
  );
};
