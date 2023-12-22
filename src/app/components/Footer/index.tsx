export const Footer = () => {
    const data = new Date()
    const ano = data.getFullYear()
  return (
    <footer className="flex flex-col sm:flex-row sm:justify-around justify-center bg-main-blue p-5 w-full">
      <div className="flex flex-col gap-2">
        <address className="text-slate-50 font-light text-sm">
          Endereço: Rua Ceará, n° 3467, Patrimônio Velho <br /> Votuporanga - SP{" "}
          <br />
          CEP 15505-167
        </address>
        <p className="text-slate-50">Telefone: (17) 99791-3789</p>
      </div>
      <div className="flex flex-col gap-2 font-light">
        <p className="text-slate-50 ">
          Cintia Paula de Souza <br />
          Advocacia
        </p>
        <p className="text-slate-50">{ano} - Todos os direitos reservados ©</p>
      </div>
    </footer>
  );
};
