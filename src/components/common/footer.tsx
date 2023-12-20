import React, { ReactNode } from "react";
import { Button, Link } from "@nextui-org/react";
import Image from "next/image";
import {
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaChevronRight,
} from "react-icons/fa6";

import Logo from "../../../public/logoWhite.png";

type ButtonSize = "sm" | "md" | "lg" | undefined;

interface SocialLinkProps {
  href: string;
  icon: ReactNode;
  size: ButtonSize;
}

function SocialLink({ href, icon, size }: SocialLinkProps) {
  return (
    <Link href={href} isExternal>
      <Button
        isIconOnly
        startContent={icon}
        size={size}
        className="bg-transparent text-white"
      />
    </Link>
  );
}

interface FooterLinkProps {
  text: string;
}

function FooterLink({ text }: FooterLinkProps) {
  return (
    <p className="group flex cursor-pointer items-center justify-center gap-1">
      <span
        className="footerLink hidden group-hover:block group-hover:animate-spin"
        style={{ animationIterationCount: 1, animationDuration: "0.3s" }}
      >
        <FaChevronRight size={12} className="text-white" />
      </span>
      {text}
    </p>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const departments = [
    "Suporte ao Cliente",
    "Integração de Sistemas",
    "Gerenciamento de Clientes",
    "Acompanhamento de Chamados",
  ];

  const institucionals = [
    "Nossa Equipe",
    "Sobre a ONDesk",
    "Política de Privacidade",
    "Depoimentos dos Clientes",
  ];

  const helps = [
    "Suporte Técnico",
    "Como Usar a ONDesk",
    "Integração de Serviços",
    "Recursos da Plataforma",
  ];

  return (
    <footer className="mx-auto w-full cursor-default items-center justify-center bg-[#333333] pt-8 shadow-xl md:px-0 text-white">
      <section className="flex flex-col items-center justify-around gap-y-4 px-4 pb-8 shadow-xl md:flex-row md:gap-y-0">
        <Link href="/">
          <Image
            src={Logo}
            alt="ONDesk"
            width={200}
            height={50}
            className="h-auto w-52 object-contain"
          />
        </Link>

        <p className="px-5 text-center text-sm">
          &copy; {currentYear} ONDesk - Todos os direitos reservados.
        </p>

        <div className="flex gap-1">
          <SocialLink
            href="https://www.linkedin.com/in/gui-bus"
            icon={<FaLinkedinIn size={20} />}
            size="sm"
          />
          <SocialLink
            href="https://github.com/gui-bus"
            icon={<FaGithub size={20} />}
            size="sm"
          />
          <SocialLink
            href="https://www.instagram.com/guibus_dev"
            icon={<FaInstagram size={20} />}
            size="sm"
          />
        </div>
      </section>

      <div className="px-4 py-6">
        <section className="mx-auto flex flex-col items-center justify-center gap-3 text-center text-xs md:flex-row">
          <div className="flex w-full flex-col gap-1">
            <h3 className="text-base font-medium uppercase">Departamentos</h3>
            {departments.map((department, index) => (
              <FooterLink key={index} text={department} />
            ))}
          </div>

          <div className="flex w-full flex-col gap-1">
            <h3 className="text-base font-medium uppercase">Institucional</h3>
            {institucionals.map((institucional, index) => (
              <FooterLink key={index} text={institucional} />
            ))}
          </div>

          <div className="flex w-full flex-col gap-1">
            <h3 className="text-base font-medium uppercase">Dúvidas</h3>
            {helps.map((help, index) => (
              <FooterLink key={index} text={help} />
            ))}
          </div>
        </section>

        <section className="mx-auto flex flex-col items-center justify-center gap-2 px-8 pt-4 text-center text-xs">
          <h3 className="text-base font-medium uppercase">Suporte</h3>
          <p>
            A ONDesk oferece suporte contínuo, 24 horas por dia, 7 dias por
            semana.
          </p>

          <div className="flex flex-col items-center justify-center gap-2 md:flex-row">
            <div className="flex items-center justify-center gap-2">
              <h3 className="font-medium uppercase">Telefone - </h3>
              <p>+55 (12) 0000-0000</p>
            </div>

            <div className="flex items-center justify-center gap-2">
              <h3 className="font-medium uppercase">E-mail - </h3>
              <p>suporte@ondesk.com</p>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}
