"use client";
import Image from "next/image";
import { Link, Spinner } from "@nextui-org/react";

import Logo from "../../../public/logoWhite.png";
import { Button } from "@nextui-org/react";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { TbDoorExit } from "react-icons/tb";
import { RiAdminLine } from "react-icons/ri";

import { signIn, signOut, useSession } from "next-auth/react";

export function Header() {
  const { status, data } = useSession();

  const handleLogin = async () => {
    await signIn();
  };

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <header className="w-full mx-auto flex items-center px-2 py-4 h-20 drop-shadow-xl bg-[#333333]">
      <nav className="w-full max-w-5xl mx-auto flex items-center justify-around md:justify-between px-2 gap-6">
        <Link href="/">
          <Image
            src={Logo}
            alt="ONDesk"
            width={200}
            height={50}
            className="h-auto w-52 object-contain"
          />
        </Link>

        <div className="flex items-center justify-center gap-2">
          {status === "loading" ? (
            <Spinner size="md" color="primary" />
          ) : (
            <>
              {status === "authenticated" ? (
                <>
                  <Link href="/dashboard">
                    <Button
                      endContent={<RiAdminLine size={20} />}
                      color="primary"
                      variant="shadow"
                      className="font-medium"
                    >
                      Painel
                    </Button>
                  </Link>

                  <Link href="/">
                    <Button
                      endContent={<TbDoorExit size={20} />}
                      color="danger"
                      variant="shadow"
                      className="font-medium"
                      onClick={handleLogout}
                    >
                      Sair
                    </Button>
                  </Link>
                </>
              ) : (
                <Link href="/">
                  <Button
                    endContent={<MdOutlineAdminPanelSettings size={20} />}
                    color="primary"
                    variant="shadow"
                    className="font-medium"
                    onClick={handleLogin}
                  >
                    Entrar
                  </Button>
                </Link>
              )}
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
