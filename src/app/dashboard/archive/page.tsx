import { Container } from "../../../components/common/container";
import { getServerSession } from "next-auth";
import { AuthOption } from "../../../lib/auth";
import { redirect } from "next/navigation";
import prismaClient from "../../../lib/prisma";
import { TicketItemArchive } from "../components/ticketArchive";

export default async function Dashboard() {
  const session = await getServerSession(AuthOption);

  if (!session || !session.user) {
    redirect("/");
  }

  const tickets = await prismaClient.ticket.findMany({
    where: {
      userId: session.user.id,
      status: "FINALIZADO",
    },
    include: {
      customer: true,
    },
    orderBy: {
      created_at: "desc",
    },
  });

  return (
    <Container>
      <main className="pb-5">
        <div className="flex flex-col items-center justify-center text-center gap-4 bg-[url('/archive.png')] bg-cover bg-center bg-no-repeat  py-10 text-white rounded-tr-xl rounded-bl-xl px-4">
          <h1 className="font-black text-2xl uppercase">
            Histórico de Chamados
          </h1>
          <p className="font-light">
            Explore de forma intuitiva o histórico de chamados dos seus
            clientes, facilitando o acompanhamento e a gestão das interações
            passadas.
          </p>
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
                <TicketItemArchive
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
              Oops! Parece que você ainda não possui nenhum chamado anterior
              para ser exibido no seu histórico.
            </h3>
            <p className="font-light">
              Cadastre e finalize algum chamado na plataforma e aproveite ao máximo os
              recursos da ONDesk.
            </p>
          </section>
        )}
      </main>
    </Container>
  );
}
