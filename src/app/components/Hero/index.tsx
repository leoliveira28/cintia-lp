import Image from "next/image"

export const Hero = () => {
    return (
        <div id="inicio" className="flex flex-col sm:flex-row p-2 gap-5 items-center">
            <Image src={"/hero-image.png"} alt={"Foto de uma família"} width={700} height={470}/>
            <div className="flex flex-col gap-2">
                <h1 className="font-semibold text-2xl sm:text-4xl text-blue-900">Dra. Cintia Paula de Souza</h1>
                <h3 className="font-mediun text-xl sm:text-2xl text-blue-950">Advogada especialista em</h3>
                <h2 className="font-extrabold text-2xl sm:text-3xl text-blue-950">Adoção</h2>
            </div>
        </div>
    )
}