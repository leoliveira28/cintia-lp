"use client"
import { List, X } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const handleToggle = () => {
    setToggle(!toggle)
  }
  const links = [
    {
      name: "INÍCIO",
      href: "#inicio",
      id: 1,
    },
    {
      name: "SOBRE",
      href: "#sobre",
      id: 2,
    },
    {
      name: "ÁREA DE ATUAÇÃO",
      href: "#atuacao",
      id: 3,
    },
    {
      name: "PERGUNTAS FREQUENTES",
      href: "#faq",
      id: 4,
    },
    {
      name: "CONTATO",
      href: "#contato",
      id: 5,
    },
  ];
  return (
    <><nav  className="bg-main-blue">
      <div className="flex items-center justify-around">
        <Link href={"/"}>
          <Image
            src={"/logo.png"}
            alt={"Logo Cintia Advocacia"}
            width={320}
            height={170} />
        </Link>
        <ul className="sm:flex hidden gap-5">
          {links.map((item) => (
            <Link key={item.id} href={item.href}>
              <li className="text-medium text-slate-50 hover:brightness-90 transition-all duration-200">{item.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
    <ul className={`sm:hidden flex gap-5 ${toggle ? 'ml-0' : ''} p-5 w-full bg-main-blue transition-all duration-300`}>
        <aside className={`${!toggle ? '' : 'p-5 gap-2'} flex flex-col bg-main-blue`}> {/* Use a largura desejada para '-full' */}
        <List onClick={handleToggle} className={`${!toggle ? 'block' : 'hidden'} text-slate-50`} size={32} />
        <X className={`${toggle ? 'block' : 'hidden'} text-slate-50`} size={32} onClick={handleToggle}/>
          {links.map((item) => (
            <Link key={item.id} href={item.href}>
              <li className={`nav-item ${!toggle ? 'hidden' : ''} text-medium text-slate-50 hover:brightness-90 transition-all duration-200`}>
                {item.name}
              </li>
            </Link>
          ))}
        </aside>
      </ul></>
  );
};
