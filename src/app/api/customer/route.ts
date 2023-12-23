import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { AuthOption } from "../../../lib/auth";
import prismaClient from "../../../lib/prisma";
import toast from "react-hot-toast";

export async function DELETE(request: Request) {
  const session = await getServerSession(AuthOption);

  if (!session || !session.user) {
    return NextResponse.json(
      { error: "Acesso não autorizado! É necessário estar logado." },
      { status: 401 }
    );
  }

  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("id");

  if (!userId) {
    return NextResponse.json(
      { error: "Erro ao deletar o cliente." },
      { status: 400 }
    );
  }

  const findTickets = await prismaClient.ticket.findFirst({
    where: {
      customerId: userId,
    },
  });

  if (findTickets) {
    return NextResponse.json(
      { error: "Erro ao deletar o cliente pois ele possui um chamado em aberto." },
      { status: 400 }
    );
  }

  try {
    await prismaClient.customer.delete({
      where: {
        id: userId as string,
      },
    });

    return NextResponse.json({ message: "Cliente deletado com sucesso!" });
  } catch (err) {
    return NextResponse.json(
      { error: "Erro ao deletar o cliente." },
      { status: 400 }
    );
  }
}

export async function POST(request: Request) {
  const session = await getServerSession(AuthOption);

  if (!session || !session.user) {
    return NextResponse.json(
      { error: "Acesso não autorizado! É necessário estar logado." },
      { status: 401 }
    );
  }

  const { name, email, phone, address, userId } = await request.json();

  try {
    await prismaClient.customer.create({
      data: {
        name,
        phone,
        email,
        address: address ? address : "Não informado",
        userId: userId,
      },
    });

    return NextResponse.json({ message: "Clinte cadastrado com sucesso!" });
  } catch (err) {
    return NextResponse.json(
      { error: "Erro ao criar novo cliente." },
      { status: 400 }
    );
  }
}
