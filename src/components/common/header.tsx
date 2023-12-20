import Image from "next/image";
import { Link } from "@nextui-org/react";

import Logo from "../../../public/logoWhite.png";
import { Button } from "@nextui-org/react";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { TbDoorExit } from "react-icons/tb";
import { RiAdminLine } from "react-icons/ri";

export function Header() {
  return (
    <header className="w-full mx-auto flex items-center px-2 py-4 h-20 drop-shadow-xl bg-[#333333]">
      <nav className="w-full max-w-5xl mx-auto flex items-center justify-around md:justify-between px-2 gap-6">
      <Link href="/">
          <Image
            src={Logo}
            alt="POWERVET"
            width={200}
            height={50}
            className="h-auto w-52 object-contain"
          />
        </Link>

        <div className="flex items-center justify-center gap-2">
          <Button
            endContent={<MdOutlineAdminPanelSettings size={20} />}
            color="primary"
            variant="shadow"
            className="font-medium"
          >
            Entrar
          </Button>
          <Button
            endContent={<RiAdminLine size={20} />}
            color="primary"
            variant="shadow"
            className="font-medium"
          >
            Painel
          </Button>
          <Button
            endContent={<TbDoorExit size={20} />}
            color="danger"
            variant="shadow"
            className="font-medium"
          >
            Sair
          </Button>
        </div>
      </nav>
    </header>
  );
}
