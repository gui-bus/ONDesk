import { Container } from "../../../components/common/container";
import { getServerSession } from "next-auth";
import { AuthOption } from "../../../lib/auth";
import { redirect } from "next/navigation";
import { Button, Link } from "@nextui-org/react";
import { PiUserCirclePlus } from "react-icons/pi";
import CardCostumer from "./components/card";

export default async function DashboardCustomer() {
  const session = await getServerSession(AuthOption);

  if (!session || !session.user) {
    redirect("/");
  }

  return (
    <Container>
      <main className="pb-5">
        <div className="flex flex-col items-center justify-center text-center gap-4 bg-[url('/clients2.png')] bg-cover bg-center bg-no-repeat  py-10 text-white rounded-tr-xl rounded-bl-xl px-4">
          <h1 className="font-black text-2xl uppercase">Lista de Clientes</h1>
          <p className="font-light">
            Agilize o gerenciamento de clientes. Cadastre-os,
            veja informações detalhadas e acesse facilmente os dados essenciais.
            
          </p>
          <Link
            href="/dashboard/customer/new"
            className="w-full mx-auto max-w-md"
          >
            <Button
              endContent={<PiUserCirclePlus size={20} />}
              color="primary"
              variant="shadow"
              className="font-medium w-full max-w-sm h-12 mx-auto"
            >
              Novo Cliente
            </Button>
          </Link>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-5">
          <CardCostumer />
          <CardCostumer />
          <CardCostumer />
        </section>
      </main>
    </Container>
  );
}
