import { Container } from "../../components/common/container";
import { getServerSession } from "next-auth";
import { AuthOption } from "../../lib/auth";
import { redirect } from "next/navigation";
import { Button, Divider, Link } from "@nextui-org/react";
import { BiLayerPlus } from "react-icons/bi";
import { TicketItem } from "./components/ticket";

export default async function Dashboard() {
  const session = await getServerSession(AuthOption);

  if (!session || !session.user) {
    redirect("/");
  }

  return (
    <Container>
      <main className="pb-5">
        <div className="flex flex-col items-center justify-center text-center gap-4">
          <h1 className="font-black text-2xl uppercase">Lista de Chamados</h1>
          <p className="font-light">
            Otimize a operação da sua empresa. Cadastre novos chamados,
            acompanhe o status, e acesse facilmente todas as interações.
            Mantenha-se organizado e ofereça um suporte eficiente com a
            funcionalidade de chamados da ONDesk.
          </p>
          <Link href="/dashboard/new" className="w-full mx-auto max-w-md">
            <Button
              endContent={<BiLayerPlus size={20} />}
              color="primary"
              variant="ghost"
              className="font-medium w-full max-w-sm h-12 mx-auto"
            >
              Novo Chamado
            </Button>
          </Link>
        </div>

        <table className="min-w-full my-5 cursor-default">
          <thead>
            <tr className="bg-[#333333] p-2 font-black text-white">
              <th className="text-center font-medium p-4">Cliente</th>
              <th className="text-center font-medium p-4 hidden md:table-cell">
                Data do Cadastro
              </th>
              <th className="text-center font-medium p-4">Status</th>
              <th className="text-center font-medium p-4">Ações</th>
            </tr>
          </thead>

          <tbody>
            <TicketItem />
            <TicketItem />
            <TicketItem />
            <TicketItem />
            <TicketItem />
          </tbody>
        </table>
      </main>
    </Container>
  );
}
