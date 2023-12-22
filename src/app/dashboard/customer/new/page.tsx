import { Container } from "../../../../components/common/container";
import { getServerSession } from "next-auth";
import { AuthOption } from "../../../../lib/auth";
import { redirect } from "next/navigation";
import { NewCustomerForm } from "../components/form";

export default async function NewCostumer() {
  const session = await getServerSession(AuthOption);

  if (!session || !session.user) {
    redirect("/");
  }

  return (
    <Container>
      <main className="pb-5">
        <div className="flex flex-col items-center justify-center text-center gap-4 bg-[url('/clients.png')] bg-cover bg-center bg-no-repeat py-10 text-white rounded-tr-xl rounded-bl-xl px-4">
          <h1 className="font-black text-2xl uppercase">
            Cadastro de Clientes
          </h1>

          <div>
            <p className="font-light">
              Preencha as informações abaixo para cadastrar um novo cliente.
            </p>
            <p className="font-light text-xs">
              Os campos que contém <span className="text-red-500">*</span> são
              obrigatórios.
            </p>
          </div>
        </div>

        <NewCustomerForm userId={session.user.id}/>
      </main>
    </Container>
  );
}
