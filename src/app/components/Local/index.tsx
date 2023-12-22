import Image from "next/image"
import Link from "next/link"



export const Local = () => {
    return (
        <div id="contato" className="flex flex-col justify-center items-center gap-2 p-5">
            <strong>Atendimento presencial, online e sem fronteiras.</strong>
            <Link href={"https://maps.app.goo.gl/tQqkpL3Vtd5T3odD6"} target="_blank">
            <Image src={"/local-map.png"} alt={"Mapa do local"} width={680} height={580}/>
            </Link>
        </div>
    )
}