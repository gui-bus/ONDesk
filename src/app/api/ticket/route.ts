import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { AuthOption } from "../../../lib/auth";
import prismaClient from "../../../lib/prisma";

export async function PATCH(request: Request) {
  const session = await getServerSession(AuthOption);

  if (!session || !session.user) {
    return NextResponse.json(
      { error: "Acesso não autorizado!" },
      { status: 401 }
    );
  }

  const { id } = await request.json();
  const findTicket = await prismaClient.ticket.findFirst({
    where: {
      id: id as string,
    },
  });

  if (!findTicket) {
    return NextResponse.json(
      { error: "Ocorreu um erro ao concluir o chamado!" },
      { status: 400 }
    );
  }

  try {
    await prismaClient.ticket.update({
      where: {
        id: id as string,
      },
      data: {
        status: "FINALIZADO",
      },
    });

    return NextResponse.json({ message: "Chamado concluído com sucesso!" });
  } catch (err) {
    return NextResponse.json(
      { error: "Ocorreu um erro ao concluir o chamado!" },
      { status: 400 }
    );
  }
}

export async function DELETE(request: Request) {
    const session = await getServerSession(AuthOption);
  
    if (!session || !session.user) {
      return NextResponse.json(
        { error: "Acesso não autorizado!" },
        { status: 401 }
      );
    }
  
    const { id } = await request.json();
    const findTicket = await prismaClient.ticket.findFirst({
      where: {
        id: id as string,
      },
    });
  
    if (!findTicket) {
      return NextResponse.json(
        { error: "Ocorreu um erro ao excluir o chamado!" },
        { status: 400 }
      );
    }
  
    try {
      await prismaClient.ticket.delete({
        where: {
          id: id as string,
        }
      });
  
      return NextResponse.json({ message: "Chamado excluído com sucesso!" });
    } catch (err) {
      return NextResponse.json(
        { error: "Ocorreu um erro ao excluir o chamado!" },
        { status: 400 }
      );
    }
  }