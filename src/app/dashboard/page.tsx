import { Container } from "../../components/common/container";
import { getServerSession } from "next-auth";
import { AuthOption } from "../../lib/auth";
import { redirect } from "next/navigation";
import { Button, Link } from "@nextui-org/react";
import { BiLayerPlus } from "react-icons/bi";
import { TicketItem } from "./components/ticket";
import prismaClient from "../../lib/prisma";

export default async function Dashboard() {
  const session = await getServerSession(AuthOption);

  if (!session || !session.user) {
    redirect("/");
  }

  const tickets = await prismaClient.ticket.findMany({
    where: {
      userId: session.user.id,
      status: "ATIVO",
    },
    include: {
      customer: true,
    },
  });

  return (
    <Container>
      <main className="pb-5">
        <div className="flex flex-col items-center justify-center text-center gap-4 bg-[url('/tickets.png')] bg-cover bg-center bg-no-repeat  py-10 text-white rounded-tr-xl rounded-bl-xl px-4">
          <h1 className="font-black text-2xl uppercase">Lista de Chamados</h1>
          <p className="font-light">
            Otimize a operação da sua empresa. Cadastre novos chamados,
            acompanhe o status, e acesse facilmente todas as interações.
          </p>
          <Link href="/dashboard/new" className="w-full mx-auto max-w-md">
            <Button
              endContent={<BiLayerPlus size={20} />}
              color="primary"
              variant="shadow"
              className="font-medium w-full max-w-sm h-12 mx-auto"
            >
              Novo Chamado
            </Button>
          </Link>
        </div>

        {tickets.length !== 0 && (
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
              {tickets.map((ticket) => (
                <TicketItem
                  ticket={ticket}
                  customer={ticket.customer}
                  key={ticket.id}
                />
              ))}
            </tbody>
          </table>
        )}

        {tickets.length === 0 && (
          <section className="flex flex-col items-center justify-center mt-5 text-center">
            <h3 className="text-xl font-bold mb-3">
              Oops! Parece que você ainda não possui nenhum chamado.
            </h3>
            <p className="font-light">
              Cadastre algum chamado na plataforma e aproveite ao máximo os
              recursos da ONDesk.
            </p>
          </section>
        )}
      </main>
    </Container>
  );
}
