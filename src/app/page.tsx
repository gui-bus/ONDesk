"use client";
import Image from "next/image";
import Logo from "../../src/app/favicon.ico";
import Brands from "../../public/brands.png";
import About from "../../public/about.png";
import Checkmark from "../../public/checkmark.png";
import Cover from "../../public/cover.png";

import { Button } from "@nextui-org/react";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { MdTaskAlt } from "react-icons/md";
import { signIn, useSession } from "next-auth/react";

const AboutTexts: { title: string; text: string }[] = [
  {
    title: "NOSSA VISÃO",
    text: "A ONDesk nasceu da visão de tornar a gestão empresarial mais acessível e eficiente. Nosso compromisso é oferecer uma plataforma intuitiva que capacita empresas de todos os tamanhos a alcançarem o seu máximo potencial.",
  },
  {
    title: "INOVAÇÃO EM AÇÃO",
    text: "Estamos dedicados a integrar as últimas tecnologias para proporcionar uma experiência de usuário moderna e eficaz. Explore nossas ferramentas avançadas e descubra como podemos impulsionar a sua operação.",
  },
  {
    title: "COMPROMISSO COM A EFICIÊNCIA",
    text: "Com foco na eficiência operacional, nós oferecemos soluções inteligentes para a gestão de clientes. Descubra como nossa abordagem centrada no usuário transforma a maneira como você conduz seus negócios.",
  },
];

export default function Home() {
  const { status, data } = useSession();

  const handleLogin = async () => {
    await signIn();
  };

  return (
    <main className="flex flex-col items-center justify-center gap-10 pb-10 text-ondesk cursor-default">
      <section className="w-full py-20 bg-[url('/bgHero.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center px-5 cursor-default">
        <div className="flex flex-col items-center justify-center gap-7">
          <Image
            src={Logo}
            alt="ONDesk"
            sizes="100vw"
            height={0}
            width={0}
            className="object-cover w-28 h-auto aspect-square"
          />
          <h1 className="font-black text-white text-3xl text-center">
            SIMPLIFICANDO SUA GESTÃO EMPRESARIAL
          </h1>
          <p className="text-white text-center font-light text-sm">
            Gerencie clientes, acompanhe tarefas e otimize sua operação com a
            plataforma intuitiva da ONDesk. A solução perfeita para a eficiência
            do seu negócio.
          </p>

          {status === "unauthenticated" && (
            <Button
              endContent={<MdOutlineAdminPanelSettings size={25} />}
              color="primary"
              variant="shadow"
              className="w-full max-w-md font-medium h-14"
              onClick={handleLogin}
            >
              Entrar na Plataforma
            </Button>
          )}
        </div>
      </section>

      <section className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-y-10 px-5">
        <h2 className="text-2xl md:text-3xl text-center w-full md:max-w-lg lg:text-start">
          FAÇA COMO ESSAS MARCAS E{" "}
          <span className="font-bold">
            CONTE COM A ONDESK PARA EXPANDIR O SEU NEGÓCIO
          </span>
        </h2>

        <Image
          src={Brands}
          alt="Brands"
          sizes="100vw"
          height={0}
          width={0}
          className="object-contain w-full max-w-sm md:max-w-lg h-auto"
        />
      </section>

      <section className="flex flex-col items-center justify-between w-full max-w-7xl mx-auto px-5">
        <Image
          src={Cover}
          alt="Cover"
          sizes="100vw"
          height={0}
          width={0}
          className="object-cover w-full h-40 rounded-t-3xl"
        />

        <div className="flex flex-col items-center justify-center gap-2 bg-[#333333] text-white p-5 rounded-b-3xl">
          <span className="font-bold uppercase text-xl flex items-center justify-center gap-2 text-center">
            Na ONDesk, acreditamos na simplificação do gerenciamento empresarial{" "}
            <MdTaskAlt size={40} className="hidden lg:block" />
          </span>
          <p className="font-light text-center">
            Nossa missão é fornecer uma plataforma intuitiva que unifica a
            gestão de clientes e chamados, permitindo que você se concentre no
            que é mais importante: fazer crescer seu negócio. Descubra mais
            sobre nossa jornada e compromisso com a eficiência.
          </p>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl mx-auto gap-10 px-5">
        <Image
          src={About}
          alt="About"
          sizes="100vw"
          height={0}
          width={0}
          className="object-cover w-full h-full lg:max-w-md rounded-3xl"
        />

        <div className="flex flex-col items-start justify-start md:items-center md:justify-center">
          <span className="text-xl font-light text-primary">SOBRE NÓS</span>
          <h3 className="text-2xl md:text-4xl font-bold">
            GESTÃO DESCOMPLICADA
          </h3>

          <div className="flex flex-col items-start justify-start gap-5 mt-5">
            {AboutTexts.map((AboutText, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-5"
              >
                <Image
                  src={Checkmark}
                  alt="About"
                  sizes="100vw"
                  height={0}
                  width={0}
                  className="object-contain w-52 h-auto aspect-square hidden md:block"
                />

                <p className="text-sm font-light">
                  <span className="font-bold">{AboutText.title}</span> -{" "}
                  {AboutText.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
