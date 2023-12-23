import { Container } from "../../../components/common/container";
import { getServerSession } from "next-auth";
import { AuthOption } from "../../../lib/auth";
import { redirect } from "next/navigation";
import { Button } from "@nextui-org/react";
import { BiLayerPlus } from "react-icons/bi";
import prismaClient from "../../../lib/prisma";
import Link from "next/link";
import { PiUserCirclePlus } from "react-icons/pi";

export default async function NewTicket() {
  const session = await getServerSession(AuthOption);

  if (!session || !session.user) {
    redirect("/");
  }

  const customers = await prismaClient.customer.findMany({
    where: {
      userId: session.user.id,
    },
  });

  return (
    <Container>
      <main className="pb-5">
        <div className="flex flex-col items-center justify-center text-center gap-4 bg-[url('/tickets2.png')] bg-cover bg-center bg-no-repeat py-10 text-white rounded-tr-xl rounded-bl-xl px-4">
          <h1 className="font-black text-2xl uppercase">
            Cadastro de Chamados
          </h1>

          <div>
            <p className="font-light">
              Preencha as informações abaixo para cadastrar um novo chamado.
            </p>
            <p className="font-light text-xs">
              Os campos que contém <span className="text-red-500">*</span> são
              obrigatórios.
            </p>
          </div>
        </div>

        <form className="mt-5 flex flex-col items-center justify-center gap-2 bg-stone-200 p-5 rounded-xl">
          <div className="flex flex-col items-start justify-start gap-1 w-full">
            <label htmlFor="name" className="text-sm">
              Nome do Chamado <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Digite o nome do chamado..."
              required
              className="w-full border-2 rounded-xl mb-2 p-2 placeholder:text-sm placeholder:text-gray-500"
              autoComplete="off"
            />
          </div>

          <div className="flex flex-col items-start justify-start gap-1 w-full">
            <label htmlFor="description" className="text-sm">
              Descreva o Problema <span className="text-red-500">*</span>
            </label>
            <textarea
              name="description"
              id="description"
              placeholder="Digite o problema..."
              required
              className="w-full border-2 rounded-xl mb-2 p-2 placeholder:text-sm placeholder:text-gray-500 resize-none h-32"
            ></textarea>
          </div>

          {customers.length !== 0 ? (
            <div className="flex flex-col items-start justify-start gap-1 w-full">
              <label htmlFor="select" className="text-sm">
                Selecione o Cliente <span className="text-red-500">*</span>
              </label>
              <select
                name="select"
                id="select"
                className="w-full border-2 rounded-xl mb-2 p-2 placeholder:text-sm placeholder:text-gray-500 resize-none text-sm"
              >
                {customers.map((customer) => (
                  <option key={customer.id} value={customer.id}>
                    {customer.name}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-1 w-full text-center">
              <h3 className="mb-3">
                Oops! Antes de criar novos chamados é necessário que você tenha
                algum cliente cadastrado na plataforma.
              </h3>

              <Link href="/dashboard/customer/new" className="w-full">
                <Button
                  endContent={<PiUserCirclePlus size={20} />}
                  color="primary"
                  variant="shadow"
                  className="font-medium w-full"
                >
                  Cadastrar Cliente
                </Button>
              </Link>
            </div>
          )}

          {customers.length !== 0 ? (
            <Button
              endContent={<BiLayerPlus size={25} />}
              color="primary"
              variant="shadow"
              className="w-full font-medium"
              type="submit"
            >
              Cadastrar Chamado
            </Button>
          ) : (
            <Button
              endContent={<BiLayerPlus size={25} />}
              color="primary"
              variant="shadow"
              className="w-full font-medium"
              type="submit"
              isDisabled
            >
              Cadastrar Chamado
            </Button>
          )}
        </form>
      </main>
    </Container>
  );
}
