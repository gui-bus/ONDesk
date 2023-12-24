"use client";
import { Container } from "@/components/common/container";
import { Button, Divider, Link } from "@nextui-org/react";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { IoReturnDownBack } from "react-icons/io5";

export function DashboardHeader() {
  const router = useRouter();

  return (
    <Container>
      <header className="flex justify-center items-center md:items-center md:justify-between gap-2 mt-5">
        <Button
          color="primary"
          variant="shadow"
          onPress={() => router.back()}
          endContent={<IoReturnDownBack size={20} />}
          className="hidden md:flex"
        >
          Voltar
        </Button>

        <div className="flex items-center justify-center gap-2">
          <Link href="/dashboard">
            <Button
              endContent={<MdOutlineLibraryBooks size={20} />}
              color="primary"
              variant="light"
              className="font-medium"
            >
              Lista de Chamados
            </Button>
          </Link>
          <Link href="/dashboard/customer">
            <Button
              endContent={<FaUsers size={20} />}
              color="primary"
              variant="light"
              className="font-medium"
            >
              Lista de Clientes
            </Button>
          </Link>
        </div>
      </header>
      <Divider className="mt-5" />
    </Container>
  );
}
