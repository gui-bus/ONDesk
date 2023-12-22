import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { AuthOption } from "../../../lib/auth";
import prismaClient from "../../../lib/prisma";

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
        address: address ? address : "",
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
