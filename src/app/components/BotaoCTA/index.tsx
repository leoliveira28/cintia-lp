"use client"
import { WhatsappLogo } from "@phosphor-icons/react"
import Link from "next/link"


export const BotaoCtaPurple = () => {
    return (
        <div>
            <Link href={"https://api.whatsapp.com/send/?phone=5517997913789&text&type=phone_number&app_absent=0"}>           
            <button className={`flex gap-5 items-center justify-center hover:brightness-95 transition-all duration-300 p-1 text-slate-50 bg-[#AB3AB5] w-[320px] rounded-md`}>
            ATENDIMENTO ONLINE <WhatsappLogo size={32} />
            </button>
            </Link>
        </div>
    )
}

export const BotaoCtaBlue = () => {
    return (
        <div>
            <Link href={"https://api.whatsapp.com/send/?phone=5517997913789&text&type=phone_number&app_absent=0"}>           
            <button className={`flex gap-5 items-center justify-center hover:brightness-95 transition-all duration-300 p-1 text-slate-50 bg-[#19369C] w-[320px] rounded-md`}>
            ATENDIMENTO ONLINE <WhatsappLogo size={32} />
            </button>
            </Link>
        </div>
    )
}